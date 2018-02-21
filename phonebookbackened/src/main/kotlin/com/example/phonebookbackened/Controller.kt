package com.example.phonebookbackened

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.Instant
import java.time.ZonedDateTime

@RestController
class Controller {

    @CrossOrigin(origins= arrayOf("http://localhost:4200")  , maxAge = 30000)
    @RequestMapping("/users")
    fun helloWorld(): Array<User> {
        val user1 = User(1, "svg-1","mukesh", ZonedDateTime.now().minusYears(20).toString(), "I'm a software devloper",
                arrayOf(Note(1,"fiend", Instant.now().toString())))
        return arrayOf(user1)
    }
}