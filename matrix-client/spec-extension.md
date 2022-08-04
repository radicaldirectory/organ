# Spec Extension

A goal of the Organ project is to promote interoperability. This means that not
only can clients be deployed on independent servers and federate successfully,
but new and existing clients can also make use of the novel features as much as
possible. This is achieved by formalising the use of the Matrix specification in
implementing each feature, and ultimately in submitting Matrix Spec Change (MSC)
proposals for any necessary extensions to the existing specification.

Matrix does not define calendar events in its specification, so Organ needs to
define for itself how information about calendar events will be communicated
over Matrix and ideally do so in a way that is standards-based so as to be
maximally interoperable with existing calendar software. Since 1998 iCalendar
has been an open standard published by the IETF that has received the most
widespread use, including implementations by Google and Apple for their calendar
software, however some aspects of the standard design are problematic for modern
applications. The`.ics` file format is not particularly portable or convenient,
and the standard includes some ambiguities around formatting dates, time zones,
recurrence rules and general file formatting which can cause frustrating bugs.

I propose that the Matrix protocol, and one of the provided server
implementations, can be used as the backend for Radical Directory. The concept
of _rooms_ is flexible, allowing clients to send custom events - not just
conversational messages.

We can use rooms to represent activist groups and organisations. Groups should
have the following features:

- Group Name
- A list of followers - people who want notifications, or updates from the
  organisation
- A sublist of members of the organisation
  - Optional: varying levels of permissions within the group membership (i.e.
    hierarchy within group)
- A stream of announcements - group members can make a post, which followers
  receive
- Ability to create events and subgroups ‘owned’ by the group - i.e. where group
  members inherit permissions over the event
- Followers may reply to announcements, or post to the group - these may be
  questions or comments about the group in general
- A (potentially large) document about the group - more on this below

Rooms can also be used to represent events. Events should have these features:

- Event Name
- Location
- Link (to booking tickets, or to join video call/stream)
- Document about the event
- List of followers (people who want notifications about the event)
- Sublist of attendees (people who are planning on attending or have booked)
- Sublist of hosts (people with permissions to edit details about the event)
- Ability for followers etc to post in the event, ask questions
  - Stream of announcements about the event (posts by hosts)

Ultimately, it would be ideal to have collaborative rich text document editing

Groups, like rooms, have members. Groups need to make announcements, which could
be achieved by posting a message in a room.

The app (whether on the web or a native app) may facilitate onboarding of new
users - checking address book for known contacts? - and discovery of (public)
groups. How is discovery done?

Groups should ideally have some kind of metadata - tags etc - so users can
select their interests
