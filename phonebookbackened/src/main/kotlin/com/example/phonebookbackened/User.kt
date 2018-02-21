package com.example.phonebookbackened

data class User(val id:Long, val avatar:String, val name:String, val birthDay: String,
                val bio:String, val notes:Array<Note>)