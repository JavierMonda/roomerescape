<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePermissionRequest;
use App\Http\Resources\PermissionResource;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

    public function index(): Response
    {
        return Inertia::render('Permissions/Index', [
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }
    public function create(): Response
    {
        return Inertia::render('Permissions/Create');
    }


    public function store(CreatePermissionRequest $request): RedirectResponse
    {
        Permission::create($request->validated());

        return to_route('permissions.index');
    }


    public function show($id)
    {
        //
    }


    public function edit(Permission $permission): Response
    {
        return Inertia::render('Permissions/Edit', [
            'permission' => new PermissionResource($permission)
        ]);

      
    }


    public function update(CreatePermissionRequest $request, Permission $permission): RedirectResponse
    {
        $permission->update($request->validated());

        return to_route('permissions.index');
    }


    public function destroy(Permission $permission): RedirectResponse
    {
        $permission->delete();

        return back();
    }
}
