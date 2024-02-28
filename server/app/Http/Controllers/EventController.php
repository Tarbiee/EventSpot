<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    //
    function addEvent(Request $req)
    {
        $event = new Event;
        $event->event_name=$req->input('event_name');
        $event->event_description=$req->input('event_description');
        $event->event_date=$req->input('event_date');
        $event->event_location=$req->input('event_location');
        $event->event_organizer=$req->input('event_organizer');
        $event->event_category=$req->input('event_category');
        $event->event_capacity=$req->input('event_capacity');
        $event->regular_ticket_price=$req->input('regular_ticket_price');
        $event->vip_ticket_price=$req->input('tvip_ticket_price');
        $event->available_regular_tickets=$req->input('available_regular_tickets');
        $event->available_vip_tickets=$req->input('available_vip_tickets');
        $event->event_image=$req->file('event_image') ->store('uploads');
        $event->save();
        return $event;
    }
    function events()
    {
        return Event::all();
    }

    function delete($id)
    {
        $result= Event::where('event_id',$id)->delete();
        if($result)
        {
            return ["result" => "product has been deleted"];
        }
        return ["message" => "operation failed"];
    }

    function getEvent($id)
    {
        return Event::find($id);
    }

    function updateEvent(Request $req, $id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(["message" => "Event not found"], 404);
        }
        $event->event_name=$req->input('event_name');
        $event->event_description=$req->input('event_description');
        $event->event_date=$req->input('event_date');
        $event->event_location=$req->input('event_location');
        $event->event_organizer=$req->input('event_organizer');
        $event->event_category=$req->input('event_category');
        $event->event_capacity=$req->input('event_capacity');
        $event->regular_ticket_price=$req->input('regular_ticket_price');
        $event->vip_ticket_price=$req->input('tvip_ticket_price');
        $event->available_regular_tickets=$req->input('available_regular_tickets');
        $event->available_vip_tickets=$req->input('available_vip_tickets');

        if ($req->hasFile('event_image')) {
            $event_image = $req->file('event_image')->store('uploads');
            $event->event_image = $event_image;
        }

        $event->save();
        return $event;
    }



}
