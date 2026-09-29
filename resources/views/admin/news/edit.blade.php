@extends('layouts.admin')
@section('title', 'Edit article')
@section('heading', 'Edit article')

@section('content')
    @include('admin.news._form', [
        'action' => route('admin.news.update', $item),
        'method' => 'PUT',
        'submit' => 'Save changes',
    ])
@endsection
