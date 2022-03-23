import React from "react";
import '../Assets/CSS/Header.css';
import $ from 'jquery';

function Header() {
    $(function(){
        // this will get the full URL at the address bar
        let url = window.location.href; 
    
        // passes on every "a" tag 
        $("#links li a").each(function() {
                // checks if its the same on the address bar
            if(url === (this.href)) { 
                $(this).closest("li a").addClass("active");
            }
        });
    });

    return (
        <div>
            <header>
                <h2><a href="/">Life is a party!</a></h2>
                <nav id="links">
                    <li><a href="/tours">Tours</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </nav>
            </header>
        </div>
    )
}

export default Header;

