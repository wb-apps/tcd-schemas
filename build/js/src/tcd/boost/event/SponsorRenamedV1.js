// @link https://schemas.truecrimedaily.com/json-schema/tcd/boost/event/sponsor-renamed/1-0-0.json#
import GdbotsNcrNodeRenamedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-renamed/NodeRenamedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class SponsorRenamedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tcd:boost:event:sponsor-renamed:1-0-0', SponsorRenamedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeRenamedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(SponsorRenamedV1);
MessageResolver.register('tcd:boost:event:sponsor-renamed', SponsorRenamedV1);
Object.freeze(SponsorRenamedV1);
Object.freeze(SponsorRenamedV1.prototype);
