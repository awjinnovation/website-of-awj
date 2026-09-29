@extends('layouts.admin')
@section('title', 'New project')
@section('heading', 'New project')
@section('content')
    @include('admin.projects._form', ['action' => route('admin.projects.store'), 'method' => 'POST', 'submit' => 'Create project'])
@endsection
