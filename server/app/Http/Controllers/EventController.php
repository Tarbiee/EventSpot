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
        $event->event_status=$req->input('event_status');
        $event->ticket_type=$req->input('ticket_type');
        $event->ticket_price=$req->input('ticket_price');
        $event->available_tickets=$req->input('available_tickets');
        $event->event_image=$req->file('event_image') ->store('uploads');
        $event->save();
        return $event;
        
    }
    function events()
    {
        return Event::all();
    }
}
