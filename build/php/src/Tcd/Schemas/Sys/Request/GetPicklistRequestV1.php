<?php
// @link https://schemas.truecrimedaily.com/json-schema/tcd/sys/request/get-picklist-request/1-0-0.json#
namespace Tcd\Schemas\Sys\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1 as GdbotsNcrGetNodeRequestV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Mixin as GdbotsNcrGetNodeRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class GetPicklistRequestV1 extends AbstractMessage implements
    GetPicklistRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrGetNodeRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tcd:sys:request:get-picklist-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrGetNodeRequestV1Mixin::create(),
            ]
        );
    }
}