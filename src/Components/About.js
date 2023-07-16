import React, { Component } from "react";

export function About() {
  document.title="BuzzFeed - About"
 
    return (
      <div className="container my-5 ">
        <div class="accordion" id="accordionPanelsStayOpenExample ">
          <div class="accordion-item bg-dark text-white">
            <h2 class="accordion-header ">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                About Us
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                <strong>why do we need News apps? : </strong>As world's
                technology is rapidly growing we has fast connection and network
                to instantly connect to other person. Day to day use in mobile,
                tablets and laptop is increasing, most of the people already
                have this facilities. In this fast and information oriented
                world we need to stay updated with every incidents and news too.
                This News app is android mobile application where user have
                access to latest news from 120+ newspapers from 50+ countries.
                The main focus of this application is to connect news articles
                from all around the world and deliver it to user as fast as
                possible in best visualize way.
              </div>
            </div>
          </div>
          <div class="accordion-item bg-dark text-white">
            <h2 class="accordion-header ">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Introduction
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                <strong>INTRODUCTION : </strong>
                Android provides simple application structure and requires Java
                and Mark-up languages knowledge to work with. Such as, an
                discrete movement delivers a solitary screen for a user
                interface and a service whole completes work in the contextual
                [1]. We can work on different module separately and can combine
                at the end, we can also add future modules easily afterwards.
                API (Application Programming Interface) which is an intermediate
                interface between different applications. It provides
                automation, immediacy, adaption and personalization. News API
                provides us the source of news articles from many different
                sources at one place and updates it. To expand the sources old
                fashioned Admin panel can be used where writers will fill the
                gap of API. In 2014, a design language has been created by
                google named Material Design which is based on “cards” uses
                grind based layouts, responsive animation, padding and depth
                effects like shadow to create an responsive, attractive and easy
                user interface. With the use of different libraries and material
                design it is possible to use attractive UI
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default About;
