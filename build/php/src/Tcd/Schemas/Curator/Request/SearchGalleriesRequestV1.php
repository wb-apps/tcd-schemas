<?php
// @link https://schemas.truecrimedaily.com/json-schema/tcd/curator/request/search-galleries-request/1-0-0.json#
namespace Tcd\Schemas\Curator\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Curator\Mixin\SearchGalleriesRequest\SearchGalleriesRequestV1 as TrinitiCuratorSearchGalleriesRequestV1;
use Triniti\Schemas\Curator\Mixin\SearchGalleriesRequest\SearchGalleriesRequestV1Mixin as TrinitiCuratorSearchGalleriesRequestV1Mixin;
use Triniti\Schemas\Curator\Mixin\WidgetSearchRequest\WidgetSearchRequestV1 as TrinitiCuratorWidgetSearchRequestV1;
use Triniti\Schemas\Curator\Mixin\WidgetSearchRequest\WidgetSearchRequestV1Mixin as TrinitiCuratorWidgetSearchRequestV1Mixin;

final class SearchGalleriesRequestV1 extends AbstractMessage implements
    SearchGalleriesRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiCuratorSearchGalleriesRequestV1,
    TrinitiCuratorWidgetSearchRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tcd:curator:request:search-galleries-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiCuratorSearchGalleriesRequestV1Mixin::create(),
                TrinitiCuratorWidgetSearchRequestV1Mixin::create(),
            ]
        );
    }
}
