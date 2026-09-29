@extends('layouts.admin')
@section('title', 'Edit project')
@section('heading', 'Edit project')
@section('content')
    @include('admin.projects._form', ['action' => route('admin.projects.update', $project), 'method' => 'PUT', 'submit' => 'Save changes'])
@endsection
