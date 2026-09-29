@extends('layouts.admin')
@section('title', 'Add team member')
@section('heading', 'Add team member')
@section('content')
    @include('admin.team._form', ['action' => route('admin.team.store'), 'method' => 'POST', 'submit' => 'Add member'])
@endsection
