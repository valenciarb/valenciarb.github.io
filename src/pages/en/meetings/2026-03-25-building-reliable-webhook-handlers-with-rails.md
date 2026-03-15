---
layout: ../../../layouts/MeetingLayout.astro
date: 2026-03-25 18:30
title: "Building reliable webhook handlers with Rails"
location: "<a href='https://new-work.se/en' target='_blank'>New Work</a> C. del Pintor Sorolla 11, València"
location_map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5089.091761488374!2d-0.3733051!3d39.471064899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049140afd6c35%3A0x3a7f3c26bcb251ef!2sNew%20Work%20SE%20Spain!5e1!3m2!1sen!2ses!4v1773586667465!5m2!1sen!2ses"
sponsor:
  name: New Work
  url: https://new-work.se/en/career/valencia
  logo: new_work.svg
  logo_width: "200px"
---

![Building reliable webhook handlers with Rails(../../../images/logos/NewWorkKitchen.jpg)

The Valencia.rb 💎 Ruby Meetup returns after Fallas! 🎆🧨🔥

# Building reliable webhook handlers with Rails

Rails doesn’t ship a “webhooks🪝 framework”, yet most production Rails apps depend on webhooks for payments, auth, and integrations. This talk explores the Rails and Ruby primitives that already exist for handling webhooks, and how to use them to build reliable webhook consumers.

We’ll cover common failure modes. For example: duplicate delivery, retries, signature verification, slow responses, and poor observability. And we’ll map them to concrete solutions using Active Job, Active Record constraints, secure_compare, and Rails instrumentation. Through real Ruby and Rails examples, we’ll contrast brittle implementations with production grade patterns that can withstand retries, race conditions, and provider weirdness.

See you on Wednesday 25th of March in New Work!

## Speaker 📢 Miguel Torres

I'm Miguel Torres I’ve been writing Ruby code for about 8 years now and I’ve been in the Payments team for different employers for 6 of those 8 years. That’s to say I have a lot of experience dealing with webhooks from Stripe, Ayden, Braintree (mainly) but also other providers and have suffered through a lot of the quirks that come with it.

## Sponsors 🙌

Thanks to [New Work Spain](https://new-work.se/en) for hosting the event and to [Auth0](https://auth0.com/) for sponsoring the finger food that we will enjoy after the talk, during networking.

<div class="has-text-centered">
  <a href="https://www.meetup.com/vlctechhub/events/313782766/" target="_blank" class="button has-background-red">Register today</a>
</div>


