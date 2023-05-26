<?php

namespace App\Http\Controllers;

use App\Models\Scape_room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScapeRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('EscapeRoom/Index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function show(Scape_room $scape_room)
    {
        return Inertia::render('EscapeRoom/Show');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function edit(Scape_room $scape_room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Scape_room $scape_room)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Scape_room  $scape_room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Scape_room $scape_room)
    {
        //
    }

    public function play(Scape_room $scape_room)
    {
        return Inertia::render('EscapeRoom/Play');
    }
}
