# Release Roadmap

# Feature Development Phases

1. Minimum
   - Plain text & single image only
   - Define custom event types and room types (define standard schema for groups
     and events)
   - Users can create accounts (invite only) and log in
   - (Specially invited) users can create/update groups
   - People in groups can invite members to join
   - Only groups, not individual users, can create events
   - users can subscribe to groups and events and view a list of updates
   - Group members can post in groups and events (no replies)
   - All users can invite other people to join
   - No encryption
2. Simple Notifications
   - Users can download a Matrix client such as Element to receive motivations
   - A bot can be made to streamline this. Maybe a single room for all Directory
     notifications, with a bot presenting with different IDs to represent
     different groups and events. Replies can be disallowed ?
   - (determine whether this strategy requires intermediary unencryption)
3. Group admin controls
   - group admins can add & remove members to/from group, promote non-admins to
     admins
   - Admins can delete events
   - Users can subscribe to other users?
   - Posts/events can have multiple owners
4. Encryption/privacy
   - E2EE for everything
   - Group admins can set group/event to private or public
   - group members can add/remove/block subscribers from private groups/events
5. Rich text
   - all documents are converted to single-column rich text
   - Images are optimised and alt text is mandatory
   - Replies added (plain text + one image only) for group and event posts
   - You can visit peoples user profile
   - Requests are a type of post. Replies are not DMs, just normal replies
   - Documents are versioned when ‘published/updated’ (old versions are
     read-only) and noncollaborative, editing is locked in edit sessions to
     prevent data loss
   - Posts/documents in groups and events can be private (to group members only)
     or public (to everyone, or to subscribers only for private ones)
   - No citations yet
6. Native apps
   - iOS and android without admin controls or group/event creation/updates.
     Just for getting updates and subscribing to events/groups
   - Full notifications with fine grained control and smart defaults
   - Event reminders
7. Discovery
   - Onboarding process for new users - tag selection, etc
   - Feed page includes suggested groups, events and tags based on who invited
     them, tags selected, groups and events users are subscribed to
   - Phone book scan?
8. ActivityPub interoperability
   - Kazama bridge
   - interoperability with Mobilizon
9. Internationalisation/localisation
   - Multiple language support in clients
   - RTL text
10. Basic direct messaging
    - plain text + single images only
    - No group chats, only one on one
    - UI includes conversation list
11. Collaborative editing
    - document editing sessions track presence, cursor, propagate state and
      resolve conflicts automatically (CRDT)
    - Sessions have user limit of 5 after which it is locked/read-only?
12. federation
    - make sure federation works
    - Server admin controls for blocking/approving users/servers, reviewing
      reported posts
13. Media and transcription
    - Group members can upload audio and video, with a custom/open source player
    - Media with audio has a rich text document and a transcript document
      attached - timestamps and dialogue dynamically linked to media
    - Transcripts can be uploaded (and downloaded?) in standard formats
    - Web editor for transcription
14. Integrations & Services
    - iCal/gCal integration with fine grained control (Public events only)
    - Loomio integration?
    - OpenStreetMap ?
    - [Otter.ai](http://Otter.ai) or similar for transcription (or begin
      training an open source model?)
    - Spam detection & Image porn/gore detection
15. Workflows
    - groups can have approval systems for posts/events
    - Citations can be a on documents
    - Documents can be made wikis - open to public edits, more advanced blame,
      edits store only changes rather than full copy (kept available as room
      state).
    - Documents and blocklists can be made forkable. Documents are ‘citeable’.
