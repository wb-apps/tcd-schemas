<?php
// @link https://schemas.truecrimedaily.com/json-schema/tcd/curator/event/teaser-marked-as-pending/1-0-0.json#
namespace Tcd\Schemas\Curator\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\NodeMarkedAsPending\NodeMarkedAsPendingV1 as GdbotsNcrNodeMarkedAsPendingV1;
use Gdbots\Schemas\Ncr\Mixin\NodeMarkedAsPending\NodeMarkedAsPendingV1Mixin as GdbotsNcrNodeMarkedAsPendingV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class TeaserMarkedAsPendingV1 extends AbstractMessage implements
    TeaserMarkedAsPending,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeMarkedAsPendingV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tcd:curator:event:teaser-marked-as-pending:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsNcrNodeMarkedAsPendingV1Mixin::create(),
            ]
        );
    }
}
