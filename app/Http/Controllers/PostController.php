<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Queries\PostsQuery;

class PostController extends Controller
{
    public function index(): Response
    {

        $query = new PostsQuery();
        $posts = $query->getAllPosts();

        return Inertia::render('Posts/Index', [
            'posts' => PostResource::collection($posts)
        ]);
    }

    public function create(): Response
    {
        // $this->authorize('create', Post::class);
        return Inertia::render('Posts/Create');
    }

    public function store(CreatePostRequest $request): RedirectResponse
    {
       //  $this->authorize('create', Post::class);
        // Varios posts pueden ser publicados por un usuario
        $request->user()->posts()->create($request->validated());

        return to_route('posts.index');
    }

    public function edit(Post $post): Response
    {
        // $this->authorize('update', $post);
        return Inertia::render('Posts/Edit', [
            'post' => new PostResource($post)
        ]);
    }

    public function show(Post $post): Response
    {
        return Inertia::render('Blog/Show', [
//             'post' => new PostResource($post)
        ]);
    }

    public function update(CreatePostRequest $request, Post $post): RedirectResponse
    {
        // $this->authorize('update', $post);
        $post->update($request->validated());

        return to_route('posts.index');
    }

    public function destroy(Post $post): RedirectResponse
    {
        // $this->authorize('delete', $post);
        $post->delete();
        return back();
    }
    
    public function view(Post $post): Response
    {
        return Inertia::render('Blog/Show', [
            // 'post' => new PostResource($post)
        ]);
    }

}
