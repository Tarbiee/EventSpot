<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\Reservation;

class ReservationController extends Controller
{
    //
    function reserveTickets(Request $request, $id)
    {
        // Validate the request data
        $request->validate([
            'ticket_type' => 'required|in:regular,VIP',
            'ticket_quantity' => 'required|integer|min:1|max:5', 
        ]);

        $event = Event::find($id);

        if(!$event){
            return response()->json(['message' => 'Event not found']);
        }

        $ticketType = $request->input('ticket_type');
        $ticketQuantity = $request->input('ticket_quantity');

        $availableTickets = ($ticketType === 'regular') ? $event->available_regular_tickets : $event->available_vip_tickets;

        if ($ticketQuantity > $availableTickets) {
            return response()->json(['message' => 'Not enough tickets available'], 400);
        }
        $userId = $this->generateUserId();

        $reservation = new Reservation();
        $reservation->event_id = $event->id;
        $reservation->user_id = $userId; // Assuming you have user authentication
        $reservation->ticket_type = $ticketType;
        $reservation->ticket_quantity = $ticketQuantity;
        $reservation->save();

        if ($ticketType === 'regular') {
            $event->available_regular_tickets -= $ticketQuantity;
        } else {
            $event->available_vip_tickets -= $ticketQuantity;
        }

        $event->save();
        return response()->json(['message' => 'Reservation successful'], 200);

    }

    // Method to generate a temporary user identifier
    private function generateUserId()
    {
        // Generate a unique identifier using PHP's uniqid function
        return uniqid('user_');
    }
}
