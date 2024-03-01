<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Models\Event;

class ReservationController extends Controller
{
    function reserveTickets(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'event_name' => 'required|string',
            'ticket_type' => 'required|in:regular,VIP',
            'ticket_quantity' => 'required|integer|min:1', 
        ]);
    
        $ticketType = $request->input('ticket_type');
        $ticketQuantity = $request->input('ticket_quantity');

        if ($ticketQuantity > 5) {
            return response()->json(['message' => 'Maximum of 5 tickets per user allowed'], 400);
        }
    
        $event = Event::where('event_name', $request->input('event_name'))->first();
    
        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }
    
        $availableTickets = ($ticketType === 'regular') ? $event->available_regular_tickets : $event->available_vip_tickets;
    
        if ($ticketQuantity > $availableTickets) {
            return response()->json(['message' => 'Not enough tickets available'], 400);
        }
    
        $reservation = new Reservation();
        $reservation->username = $request->input('username');
        $reservation->event_name = $request->input('event_name');
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
    
}
