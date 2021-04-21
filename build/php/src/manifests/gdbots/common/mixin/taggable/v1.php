<?php
declare(strict_types=1);

/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Returns an array of curies using mixin "gdbots:common:mixin:taggable:v1"
 * @link https://schemas.truecrimedaily.com/json-schema/gdbots/common/mixin/taggable/1-0-0.json#
 */

return [
    'gdbots:iam:command:grant-roles-to-app:v1',
    'gdbots:iam:command:grant-roles-to-user:v1',
    'gdbots:iam:command:revoke-roles-from-app:v1',
    'gdbots:iam:command:revoke-roles-from-user:v1',
    'gdbots:iam:event:app-roles-granted:v1',
    'gdbots:iam:event:app-roles-revoked:v1',
    'gdbots:iam:event:user-roles-granted:v1',
    'gdbots:iam:event:user-roles-revoked:v1',
    'gdbots:ncr:command:create-edge:v1',
    'gdbots:ncr:command:create-node:v1',
    'gdbots:ncr:command:delete-edge:v1',
    'gdbots:ncr:command:delete-node:v1',
    'gdbots:ncr:command:expire-node:v1',
    'gdbots:ncr:command:lock-node:v1',
    'gdbots:ncr:command:mark-node-as-draft:v1',
    'gdbots:ncr:command:mark-node-as-pending:v1',
    'gdbots:ncr:command:publish-node:v1',
    'gdbots:ncr:command:rename-node:v1',
    'gdbots:ncr:command:unlock-node:v1',
    'gdbots:ncr:command:unpublish-node:v1',
    'gdbots:ncr:command:update-node-labels:v1',
    'gdbots:ncr:command:update-node-tags:v1',
    'gdbots:ncr:command:update-node:v1',
    'gdbots:ncr:event:edge-created:v1',
    'gdbots:ncr:event:edge-deleted:v1',
    'gdbots:ncr:event:node-created:v1',
    'gdbots:ncr:event:node-deleted:v1',
    'gdbots:ncr:event:node-expired:v1',
    'gdbots:ncr:event:node-labels-updated:v1',
    'gdbots:ncr:event:node-locked:v1',
    'gdbots:ncr:event:node-marked-as-draft:v1',
    'gdbots:ncr:event:node-marked-as-pending:v1',
    'gdbots:ncr:event:node-published:v1',
    'gdbots:ncr:event:node-renamed:v1',
    'gdbots:ncr:event:node-scheduled:v1',
    'gdbots:ncr:event:node-tags-updated:v1',
    'gdbots:ncr:event:node-unlocked:v1',
    'gdbots:ncr:event:node-unpublished:v1',
    'gdbots:ncr:event:node-updated:v1',
    'tcd:apollo:node:poll:v1',
    'tcd:boost:node:sponsor:v1',
    'tcd:canvas:node:page:v1',
    'tcd:curator:node:ad-widget:v1',
    'tcd:curator:node:alert-widget:v1',
    'tcd:curator:node:article-teaser:v1',
    'tcd:curator:node:asset-teaser:v1',
    'tcd:curator:node:blogroll-widget:v1',
    'tcd:curator:node:carousel-widget:v1',
    'tcd:curator:node:category-teaser:v1',
    'tcd:curator:node:channel-teaser:v1',
    'tcd:curator:node:code-widget:v1',
    'tcd:curator:node:gallery-teaser:v1',
    'tcd:curator:node:gallery-widget:v1',
    'tcd:curator:node:gallery:v1',
    'tcd:curator:node:gridler-widget:v1',
    'tcd:curator:node:hero-bar-widget:v1',
    'tcd:curator:node:link-teaser:v1',
    'tcd:curator:node:media-list-widget:v1',
    'tcd:curator:node:page-teaser:v1',
    'tcd:curator:node:person-teaser:v1',
    'tcd:curator:node:playlist-widget:v1',
    'tcd:curator:node:poll-teaser:v1',
    'tcd:curator:node:promotion:v1',
    'tcd:curator:node:showtimes-widget:v1',
    'tcd:curator:node:slider-widget:v1',
    'tcd:curator:node:spotlight-widget:v1',
    'tcd:curator:node:tag-cloud-widget:v1',
    'tcd:curator:node:tetris-widget:v1',
    'tcd:curator:node:timeline-teaser:v1',
    'tcd:curator:node:timeline:v1',
    'tcd:curator:node:video-teaser:v1',
    'tcd:curator:node:youtube-video-teaser:v1',
    'tcd:dam:node:archive-asset:v1',
    'tcd:dam:node:audio-asset:v1',
    'tcd:dam:node:code-asset:v1',
    'tcd:dam:node:document-asset:v1',
    'tcd:dam:node:image-asset:v1',
    'tcd:dam:node:unknown-asset:v1',
    'tcd:dam:node:video-asset:v1',
    'tcd:iam:node:user:v1',
    'tcd:news:node:article:v1',
    'tcd:ovp:node:video:v1',
    'tcd:people:node:person:v1',
    'tcd:taxonomy:node:category:v1',
    'tcd:taxonomy:node:channel:v1',
    'triniti:apollo:command:cast-vote:v1',
    'triniti:apollo:event:vote-casted:v1',
    'triniti:news:command:sync-facebook-instant-article:v1',
    'triniti:news:event:facebook-instant-article-synced:v1',
    'triniti:notify::notifier-result:v1',
    'triniti:ovp.jwplayer:command:sync-media:v1',
    'triniti:ovp.jwplayer:event:media-synced:v1',
    'triniti:ovp.medialive:event:channel-started:v1',
    'triniti:ovp.medialive:event:channel-stopped:v1',
    'triniti:ovp:command:update-transcoding-status:v1',
    'triniti:ovp:command:update-transcription-status:v1',
    'triniti:ovp:event:transcoding-completed:v1',
    'triniti:ovp:event:transcoding-failed:v1',
    'triniti:ovp:event:transcoding-started:v1',
    'triniti:ovp:event:transcription-completed:v1',
    'triniti:ovp:event:transcription-failed:v1',
    'triniti:ovp:event:transcription-started:v1',
];