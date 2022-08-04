# Radical Directory Homeserver

App development will occur alongside the administration of a homeserver, and
hosting of the web client, by the group Radical Directory. The intention for
this homeserver is to provide a locally-managed instance of the Organ software
for the local grassroots activist community in Naarm (so-called Melbourne,
Australia). The Radical Directory group will organise to provide moderation, to
decide any process for how new people join the server, and to foster an
inclusive, open, radical and engaged culture. The group will also need to do
some fundraising to support operational costs, with the emphasis always on
meeting community needs.

The broad hope and goal for this project is that similarly structured groups in
different contexts will decide to host their own homeserver instance and
federate with existing ones. For example, another group in Naarm might decide to
run a homeserver for arts and cultural events. This way, users in Naarm homed on
either server can access all the available event information they find relevant
to them, whether or not it is relevant to a given homeserver. Likewise, people
in Naarm might like to promote online events that are organised in other places
around the world. With considered UX design, federation can make this happen as
seamlessly as if all the data were kept on contrally controlled servers (like on
Facebook), but free from the extractive mechanics.

Unfotunately, deploying a homeserver is not necessarily straightforward.
Currently, the easiest way to do so is using a project called
[matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy),
which involves hiring a server, running some config on it, passing the server
details into a configuration file, and running a script which automates the
deployment. As the Organ project develops, it may make sense to try to
contribute to this project so that the Organ web client as well as the server
can be auto-deployed using the script. Any additional configuration that would
make sense for Organ admins could be described in example config files,
tutorials or walkthrough videos to make setting up an Organ client + homeserver
instance more accessible.

Some things to look into:

- At what point S3-like object storage becomes beneficial. A cheaper,
  non-Amazon, distributed S3 alternative is [Storj](https://www.storj.io)
- Whether custom bots could be helpful for Organ server admins
