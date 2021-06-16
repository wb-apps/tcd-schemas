// @link https://schemas.truecrimedaily.com/json-schema/tcd/news/node/article-stats/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import Message from '@gdbots/pbj/Message';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiNewsArticleStatsV1Mixin from '@triniti/schemas/triniti/news/mixin/article-stats/ArticleStatsV1Mixin';
import UuidIdentifier from '@gdbots/pbj/well-known/UuidIdentifier';

export default class ArticleStatsV1 extends Message {
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
        Fb.create('comments', T.IntType.create())
          .build(),
        Fb.create('views', T.IntType.create())
          .build(),
        Fb.create('disqus_comments', T.IntType.create())
          .build(),
        Fb.create('disqus_dislikes', T.IntType.create())
          .build(),
        Fb.create('disqus_likes', T.IntType.create())
          .build(),
        Fb.create('fb_comments', T.IntType.create())
          .build(),
        Fb.create('fb_reactions', T.IntType.create())
          .build(),
        Fb.create('fb_shares', T.IntType.create())
          .build(),
        /*
         * The sum of all fb_* metrics collected.
         */
        Fb.create('fb_engagement', T.IntType.create())
          .build(),
        Fb.create('ga_entrances', T.IntType.create())
          .build(),
        Fb.create('ga_entrance_rate', T.IntType.create())
          .build(),
        Fb.create('ga_pageviews', T.IntType.create())
          .build(),
        Fb.create('ga_unique_pageviews', T.IntType.create())
          .build(),
        Fb.create('ga_time_on_page', T.IntType.create())
          .build(),
        Fb.create('ga_avg_time_on_page', T.IntType.create())
          .build(),
        Fb.create('ga_exits', T.IntType.create())
          .build(),
        Fb.create('ga_exit_rate', T.IntType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = ArticleStatsV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tcd:news:node:article-stats:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tcd:news:node:article-stats';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tcd:news:node:article-stats:v1';
M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'triniti:news:mixin:article-stats:v1',
  'triniti:news:mixin:article-stats',
];

GdbotsNcrNodeV1Mixin(M);

TrinitiNewsArticleStatsV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
