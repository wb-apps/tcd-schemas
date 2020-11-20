// @link https://schemas.truecrimedaily.com/json-schema/tcd/boost/request/get-sponsor-response/1-0-0.json#
import GdbotsNcrGetNodeResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-response/GetNodeResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetSponsorResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tcd:boost:request:get-sponsor-response:1-0-0', GetSponsorResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetSponsorResponseV1);
MessageResolver.register('tcd:boost:request:get-sponsor-response', GetSponsorResponseV1);
Object.freeze(GetSponsorResponseV1);
Object.freeze(GetSponsorResponseV1.prototype);