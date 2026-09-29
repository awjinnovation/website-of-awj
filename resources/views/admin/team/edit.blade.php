@extends('layouts.admin')
@section('title', 'Edit team member')
@section('heading', 'Edit team member')
@section('content')
    @include('admin.team._form', ['action' => route('admin.team.update', $member), 'method' => 'PUT', 'submit' => 'Save changes'])
@endsection
