@extends('layouts.admin')
@section('title', 'New article')
@section('heading', 'New article')

@section('content')
    @include('admin.news._form', [
        'action' => route('admin.news.store'),
        'method' => 'POST',
        'submit' => 'Create article',
    ])
@endsection
