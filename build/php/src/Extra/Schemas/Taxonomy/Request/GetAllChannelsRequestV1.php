<?php
// @link https://schemas.truecrimedaily.com/json-schema/tcd/taxonomy/request/get-all-channels-request/1-0-0.json#
namespace Tcd\Schemas\Taxonomy\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\GetAllChannelsRequest\GetAllChannelsRequestV1 as TrinitiTaxonomyGetAllChannelsRequestV1;
use Triniti\Schemas\Taxonomy\Mixin\GetAllChannelsRequest\GetAllChannelsRequestV1Mixin as TrinitiTaxonomyGetAllChannelsRequestV1Mixin;

final class GetAllChannelsRequestV1 extends AbstractMessage implements
    GetAllChannelsRequest,
    GdbotsPbjxRequestV1,
    TrinitiTaxonomyGetAllChannelsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tcd:taxonomy:request:get-all-channels-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                TrinitiTaxonomyGetAllChannelsRequestV1Mixin::create(),
            ]
        );
    }
}
