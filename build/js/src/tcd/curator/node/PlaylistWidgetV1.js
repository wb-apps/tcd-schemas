// @link https://schemas.truecrimedaily.com/json-schema/tcd/curator/node/playlist-widget/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/enums/Format';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import Message from '@gdbots/pbj/Message';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiCuratorPlaylistWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/playlist-widget/PlaylistWidgetV1Mixin';
import UuidIdentifier from '@gdbots/pbj/well-known/UuidIdentifier';

export default class PlaylistWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        /*
         * The "_id" value:
         * - MUST NOT change for the life of the node.
         * - SHOULD be globally unique
         * - SHOULD be generated by the app (ideally in default value closure... e.g. UuidIdentifier::generate())
         */
        Fb.create('_id', T.IdentifierType.create())
          .required()
          .withDefault(() => UuidIdentifier.generate())
          .classProto(UuidIdentifier)
          .overridable(true)
          .build(),
        Fb.create('status', T.StringEnumType.create())
          .withDefault("draft")
          .classProto(NodeStatus)
          .build(),
        Fb.create('etag', T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create('created_at', T.MicrotimeType.create())
          .build(),
        /*
         * A fully qualified reference to what created this node. This is intentionally a message-ref
         * and not a user id because it is often a program that creates nodes, not a user.
         */
        Fb.create('creator_ref', T.MessageRefType.create())
          .build(),
        Fb.create('updated_at', T.MicrotimeType.create())
          .useTypeDefault(false)
          .build(),
        /*
         * A fully qualified reference to what updated this node. This is intentionally a message-ref
         * and not a user id because it is often a program that updates nodes, not a user.
         * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('updater_ref', T.MessageRefType.create())
          .build(),
        /*
         * A reference to the last event that changed the state of this node.
         * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('last_event_ref', T.MessageRefType.create())
          .build(),
        Fb.create('title', T.StringType.create())
          .build(),
        /*
         * A string containing HTML that is injected into
         * the application before the widget renders.
         */
        Fb.create('pre_render_code', T.TextType.create())
          .build(),
        /*
         * A string containing HTML that is injected into
         * the application after the widget renders.
         */
        Fb.create('post_render_code', T.TextType.create())
          .build(),
        Fb.create('show_border', T.BooleanType.create())
          .build(),
        Fb.create('show_header', T.BooleanType.create())
          .withDefault(true)
          .build(),
        Fb.create('header_text', T.StringType.create())
          .build(),
        Fb.create('partner_url', T.TextType.create())
          .format(Format.URL)
          .build(),
        Fb.create('partner_text', T.StringType.create())
          .build(),
        Fb.create('view_all_url', T.TextType.create())
          .format(Format.URL)
          .build(),
        Fb.create('view_all_text', T.StringType.create())
          .build(),
        Fb.create('autoplay', T.BooleanType.create())
          .withDefault(true)
          .build(),
        /*
         * Tags is a map that categorizes data or tracks references in
         * external systems. The tags names should be consistent and descriptive,
         * e.g. fb_user_id:123, salesforce_customer_id:456.
         */
        Fb.create('tags', T.StringType.create())
          .asAMap()
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        /*
         * A string used to indicate that a visual treatment should be
         * applied to a piece of content, e.g. "christmas" or "taco".
         */
        Fb.create('theme', T.StringType.create())
          .format(Format.SLUG)
          .build(),
        /*
         * When nodes have been acquired by another process you can populate
         * this field instead of "search_request".
         */
        Fb.create('prefetched_nodes', T.MessageType.create())
          .asAList()
          .anyOfCuries([
            'gdbots:ncr:mixin:node',
          ])
          .build(),
        Fb.create('search_request', T.MessageType.create())
          .anyOfCuries([
            'triniti:curator:mixin:widget-search-request',
          ])
          .build(),
        Fb.create('show_pagination', T.BooleanType.create())
          .build(),
        Fb.create('show_item_cta_text', T.BooleanType.create())
          .build(),
        Fb.create('show_item_date', T.BooleanType.create())
          .build(),
        Fb.create('show_item_duration', T.BooleanType.create())
          .build(),
        Fb.create('show_item_excerpt', T.BooleanType.create())
          .build(),
        Fb.create('show_item_icon', T.BooleanType.create())
          .build(),
        Fb.create('show_item_media_count', T.BooleanType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = PlaylistWidgetV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tcd:curator:node:playlist-widget:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tcd:curator:node:playlist-widget';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tcd:curator:node:playlist-widget:v1';
M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'triniti:curator:mixin:widget:v1',
  'triniti:curator:mixin:widget',
  'triniti:curator:mixin:playlist-widget:v1',
  'triniti:curator:mixin:playlist-widget',
  'gdbots:common:mixin:taggable:v1',
  'gdbots:common:mixin:taggable',
  'gdbots:ncr:mixin:indexed:v1',
  'gdbots:ncr:mixin:indexed',
  'triniti:common:mixin:themeable:v1',
  'triniti:common:mixin:themeable',
  'triniti:curator:mixin:widget-has-search-request:v1',
  'triniti:curator:mixin:widget-has-search-request',
];

GdbotsNcrNodeV1Mixin(M);

TrinitiCuratorPlaylistWidgetV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
