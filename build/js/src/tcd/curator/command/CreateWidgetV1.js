// @link https://schemas.truecrimedaily.com/json-schema/tcd/curator/command/create-widget/1-0-0.json#
import GdbotsNcrCreateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/create-node/CreateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class CreateWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tcd:curator:command:create-widget:1-0-0', CreateWidgetV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrCreateNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(CreateWidgetV1);
MessageResolver.register('tcd:curator:command:create-widget', CreateWidgetV1);
Object.freeze(CreateWidgetV1);
Object.freeze(CreateWidgetV1.prototype);
