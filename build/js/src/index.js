/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.truecrimedaily.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/schemas/gdbots/analytics/tracker/KeenV1';
import '@gdbots/schemas/gdbots/contexts/AppV1';
import '@gdbots/schemas/gdbots/contexts/CloudV1';
import '@gdbots/schemas/gdbots/contexts/UserAgentV1';
import '@gdbots/schemas/gdbots/forms/field/AddressFieldV1';
import '@gdbots/schemas/gdbots/forms/field/AgeFieldV1';
import '@gdbots/schemas/gdbots/forms/field/CountryFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DateFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DobFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DocumentFieldV1';
import '@gdbots/schemas/gdbots/forms/field/EmailFieldV1';
import '@gdbots/schemas/gdbots/forms/field/FacebookUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/GenderFieldV1';
import '@gdbots/schemas/gdbots/forms/field/HeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/InstagramUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LegalFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LongTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/NumberFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhoneFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhotoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PinterestUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SelectFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SexualOrientationFieldV1';
import '@gdbots/schemas/gdbots/forms/field/ShortTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SignatureFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SkypeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SnapchatUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/StatementFieldV1';
import '@gdbots/schemas/gdbots/forms/field/TwitterUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/VideoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WebsiteFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YesNoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeVideoFieldV1';
import '@gdbots/schemas/gdbots/geo/AddressV1';
import '@gdbots/schemas/gdbots/ncr/command/CreateEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/DeleteEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/UpdateNodeLabelsV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeCreatedV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeDeletedV1';
import '@gdbots/schemas/gdbots/ncr/event/NodeLabelsUpdatedV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchRequestV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchResponseV1';
import '@gdbots/schemas/gdbots/pbjx/EnvelopeV1';
import '@gdbots/schemas/gdbots/pbjx/command/CheckHealthV1';
import '@gdbots/schemas/gdbots/pbjx/event/EventExecutionFailedV1';
import '@gdbots/schemas/gdbots/pbjx/event/HealthCheckedV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoRequestV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoResponseV1';
import '@gdbots/schemas/gdbots/pbjx/request/RequestFailedResponseV1';
import '@wbtcd/schemas/tcd/apollo/PollAnswerV1';
import '@wbtcd/schemas/tcd/apollo/command/CastVoteV1';
import '@wbtcd/schemas/tcd/apollo/command/CreatePollV1';
import '@wbtcd/schemas/tcd/apollo/command/DeletePollV1';
import '@wbtcd/schemas/tcd/apollo/command/ExpirePollV1';
import '@wbtcd/schemas/tcd/apollo/command/MarkPollAsDraftV1';
import '@wbtcd/schemas/tcd/apollo/command/MarkPollAsPendingV1';
import '@wbtcd/schemas/tcd/apollo/command/PublishPollV1';
import '@wbtcd/schemas/tcd/apollo/command/UnpublishPollV1';
import '@wbtcd/schemas/tcd/apollo/command/UpdatePollV1';
import '@wbtcd/schemas/tcd/apollo/event/PollCreatedV1';
import '@wbtcd/schemas/tcd/apollo/event/PollDeletedV1';
import '@wbtcd/schemas/tcd/apollo/event/PollExpiredV1';
import '@wbtcd/schemas/tcd/apollo/event/PollMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/apollo/event/PollMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/apollo/event/PollPublishedV1';
import '@wbtcd/schemas/tcd/apollo/event/PollScheduledV1';
import '@wbtcd/schemas/tcd/apollo/event/PollUnpublishedV1';
import '@wbtcd/schemas/tcd/apollo/event/PollUpdatedV1';
import '@wbtcd/schemas/tcd/apollo/event/VoteCastedV1';
import '@wbtcd/schemas/tcd/apollo/node/PollV1';
import '@wbtcd/schemas/tcd/apollo/node/PollStatsV1';
import '@wbtcd/schemas/tcd/apollo/request/GetPollHistoryRequestV1';
import '@wbtcd/schemas/tcd/apollo/request/GetPollHistoryResponseV1';
import '@wbtcd/schemas/tcd/apollo/request/GetPollRequestV1';
import '@wbtcd/schemas/tcd/apollo/request/GetPollResponseV1';
import '@wbtcd/schemas/tcd/apollo/request/SearchPollsRequestV1';
import '@wbtcd/schemas/tcd/apollo/request/SearchPollsResponseV1';
import '@wbtcd/schemas/tcd/boost/command/CreateSponsorV1';
import '@wbtcd/schemas/tcd/boost/command/DeleteSponsorV1';
import '@wbtcd/schemas/tcd/boost/command/ExpireSponsorV1';
import '@wbtcd/schemas/tcd/boost/command/MarkSponsorAsDraftV1';
import '@wbtcd/schemas/tcd/boost/command/MarkSponsorAsPendingV1';
import '@wbtcd/schemas/tcd/boost/command/PublishSponsorV1';
import '@wbtcd/schemas/tcd/boost/command/RenameSponsorV1';
import '@wbtcd/schemas/tcd/boost/command/UnpublishSponsorV1';
import '@wbtcd/schemas/tcd/boost/command/UpdateSponsorV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorCreatedV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorDeletedV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorExpiredV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorPublishedV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorRenamedV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorScheduledV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorUnpublishedV1';
import '@wbtcd/schemas/tcd/boost/event/SponsorUpdatedV1';
import '@wbtcd/schemas/tcd/boost/node/SponsorV1';
import '@wbtcd/schemas/tcd/boost/request/GetSponsorHistoryRequestV1';
import '@wbtcd/schemas/tcd/boost/request/GetSponsorHistoryResponseV1';
import '@wbtcd/schemas/tcd/boost/request/GetSponsorRequestV1';
import '@wbtcd/schemas/tcd/boost/request/GetSponsorResponseV1';
import '@wbtcd/schemas/tcd/boost/request/SearchSponsorsRequestV1';
import '@wbtcd/schemas/tcd/boost/request/SearchSponsorsResponseV1';
import '@wbtcd/schemas/tcd/canvas/block/ArticleBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/AudioBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/CodeBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/DividerBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/DocumentBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/EmeFormBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/FacebookPostBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/FacebookVideoBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/GalleryBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/GoogleMapBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/HeadingBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/IframeBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/ImageBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/ImgurPostBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/InstagramMediaBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/PageBreakBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/PinterestPinBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/PollBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/PollGridBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/QuoteBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/SoundcloudAudioBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/SpotifyEmbedBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/SpotifyTrackBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/TextBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/TiktokEmbedBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/TumblrPostBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/TwitterTweetBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/VideoBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/VimeoVideoBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/YoutubePlaylistBlockV1';
import '@wbtcd/schemas/tcd/canvas/block/YoutubeVideoBlockV1';
import '@wbtcd/schemas/tcd/canvas/command/CreatePageV1';
import '@wbtcd/schemas/tcd/canvas/command/DeletePageV1';
import '@wbtcd/schemas/tcd/canvas/command/ExpirePageV1';
import '@wbtcd/schemas/tcd/canvas/command/MarkPageAsDraftV1';
import '@wbtcd/schemas/tcd/canvas/command/MarkPageAsPendingV1';
import '@wbtcd/schemas/tcd/canvas/command/PublishPageV1';
import '@wbtcd/schemas/tcd/canvas/command/RenamePageV1';
import '@wbtcd/schemas/tcd/canvas/command/UnpublishPageV1';
import '@wbtcd/schemas/tcd/canvas/command/UpdatePageV1';
import '@wbtcd/schemas/tcd/canvas/event/PageCreatedV1';
import '@wbtcd/schemas/tcd/canvas/event/PageDeletedV1';
import '@wbtcd/schemas/tcd/canvas/event/PageExpiredV1';
import '@wbtcd/schemas/tcd/canvas/event/PageMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/canvas/event/PageMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/canvas/event/PagePublishedV1';
import '@wbtcd/schemas/tcd/canvas/event/PageRenamedV1';
import '@wbtcd/schemas/tcd/canvas/event/PageScheduledV1';
import '@wbtcd/schemas/tcd/canvas/event/PageUnpublishedV1';
import '@wbtcd/schemas/tcd/canvas/event/PageUpdatedV1';
import '@wbtcd/schemas/tcd/canvas/node/PageV1';
import '@wbtcd/schemas/tcd/canvas/request/GetPageHistoryRequestV1';
import '@wbtcd/schemas/tcd/canvas/request/GetPageHistoryResponseV1';
import '@wbtcd/schemas/tcd/canvas/request/GetPageRequestV1';
import '@wbtcd/schemas/tcd/canvas/request/GetPageResponseV1';
import '@wbtcd/schemas/tcd/canvas/request/SearchPagesRequestV1';
import '@wbtcd/schemas/tcd/canvas/request/SearchPagesResponseV1';
import '@wbtcd/schemas/tcd/curator/command/CreateGalleryV1';
import '@wbtcd/schemas/tcd/curator/command/CreatePromotionV1';
import '@wbtcd/schemas/tcd/curator/command/CreateTeaserV1';
import '@wbtcd/schemas/tcd/curator/command/CreateTimelineV1';
import '@wbtcd/schemas/tcd/curator/command/CreateWidgetV1';
import '@wbtcd/schemas/tcd/curator/command/DeleteGalleryV1';
import '@wbtcd/schemas/tcd/curator/command/DeletePromotionV1';
import '@wbtcd/schemas/tcd/curator/command/DeleteTeaserV1';
import '@wbtcd/schemas/tcd/curator/command/DeleteTimelineV1';
import '@wbtcd/schemas/tcd/curator/command/DeleteWidgetV1';
import '@wbtcd/schemas/tcd/curator/command/ExpireGalleryV1';
import '@wbtcd/schemas/tcd/curator/command/ExpirePromotionV1';
import '@wbtcd/schemas/tcd/curator/command/ExpireTeaserV1';
import '@wbtcd/schemas/tcd/curator/command/ExpireTimelineV1';
import '@wbtcd/schemas/tcd/curator/command/MarkGalleryAsDraftV1';
import '@wbtcd/schemas/tcd/curator/command/MarkGalleryAsPendingV1';
import '@wbtcd/schemas/tcd/curator/command/MarkPromotionAsDraftV1';
import '@wbtcd/schemas/tcd/curator/command/MarkPromotionAsPendingV1';
import '@wbtcd/schemas/tcd/curator/command/MarkTeaserAsDraftV1';
import '@wbtcd/schemas/tcd/curator/command/MarkTeaserAsPendingV1';
import '@wbtcd/schemas/tcd/curator/command/MarkTimelineAsDraftV1';
import '@wbtcd/schemas/tcd/curator/command/MarkTimelineAsPendingV1';
import '@wbtcd/schemas/tcd/curator/command/PublishGalleryV1';
import '@wbtcd/schemas/tcd/curator/command/PublishPromotionV1';
import '@wbtcd/schemas/tcd/curator/command/PublishTeaserV1';
import '@wbtcd/schemas/tcd/curator/command/PublishTimelineV1';
import '@wbtcd/schemas/tcd/curator/command/RemoveTeaserSlottingV1';
import '@wbtcd/schemas/tcd/curator/command/RenameGalleryV1';
import '@wbtcd/schemas/tcd/curator/command/RenameTimelineV1';
import '@wbtcd/schemas/tcd/curator/command/SyncTeaserV1';
import '@wbtcd/schemas/tcd/curator/command/UnpublishGalleryV1';
import '@wbtcd/schemas/tcd/curator/command/UnpublishPromotionV1';
import '@wbtcd/schemas/tcd/curator/command/UnpublishTeaserV1';
import '@wbtcd/schemas/tcd/curator/command/UnpublishTimelineV1';
import '@wbtcd/schemas/tcd/curator/command/UpdateGalleryV1';
import '@wbtcd/schemas/tcd/curator/command/UpdateGalleryImageCountV1';
import '@wbtcd/schemas/tcd/curator/command/UpdatePromotionV1';
import '@wbtcd/schemas/tcd/curator/command/UpdateTeaserV1';
import '@wbtcd/schemas/tcd/curator/command/UpdateTimelineV1';
import '@wbtcd/schemas/tcd/curator/command/UpdateWidgetV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryCreatedV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryDeletedV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryExpiredV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryImageCountUpdatedV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryPublishedV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryRenamedV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryScheduledV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryUnpublishedV1';
import '@wbtcd/schemas/tcd/curator/event/GalleryUpdatedV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionCreatedV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionDeletedV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionExpiredV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionPublishedV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionScheduledV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionUnpublishedV1';
import '@wbtcd/schemas/tcd/curator/event/PromotionUpdatedV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserCreatedV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserDeletedV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserExpiredV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserPublishedV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserScheduledV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserSlottingRemovedV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserUnpublishedV1';
import '@wbtcd/schemas/tcd/curator/event/TeaserUpdatedV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineCreatedV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineDeletedV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineExpiredV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/curator/event/TimelinePublishedV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineRenamedV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineScheduledV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineUnpublishedV1';
import '@wbtcd/schemas/tcd/curator/event/TimelineUpdatedV1';
import '@wbtcd/schemas/tcd/curator/event/WidgetCreatedV1';
import '@wbtcd/schemas/tcd/curator/event/WidgetDeletedV1';
import '@wbtcd/schemas/tcd/curator/event/WidgetUpdatedV1';
import '@wbtcd/schemas/tcd/curator/node/AdWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/AlertWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/ArticleTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/AssetTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/BlogrollWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/CarouselWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/CategoryTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/ChannelTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/CodeWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/GalleryV1';
import '@wbtcd/schemas/tcd/curator/node/GalleryTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/GalleryWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/GridlerWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/HeroBarWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/LinkTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/MediaListWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/PageTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/PersonTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/PlaylistWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/PollTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/PromotionV1';
import '@wbtcd/schemas/tcd/curator/node/ShowtimesWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/SliderWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/SpotlightWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/TagCloudWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/TetrisWidgetV1';
import '@wbtcd/schemas/tcd/curator/node/TimelineV1';
import '@wbtcd/schemas/tcd/curator/node/TimelineTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/VideoTeaserV1';
import '@wbtcd/schemas/tcd/curator/node/YoutubeVideoTeaserV1';
import '@wbtcd/schemas/tcd/curator/request/GetGalleryHistoryRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetGalleryHistoryResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetGalleryRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetGalleryResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetPromotionHistoryRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetPromotionHistoryResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetPromotionRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetPromotionResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetTeaserHistoryRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetTeaserHistoryResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetTeaserRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetTeaserResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetTimelineHistoryRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetTimelineHistoryResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetTimelineRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetTimelineResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetWidgetHistoryRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetWidgetHistoryResponseV1';
import '@wbtcd/schemas/tcd/curator/request/GetWidgetRequestV1';
import '@wbtcd/schemas/tcd/curator/request/GetWidgetResponseV1';
import '@wbtcd/schemas/tcd/curator/request/RenderPromotionRequestV1';
import '@wbtcd/schemas/tcd/curator/request/RenderPromotionResponseV1';
import '@wbtcd/schemas/tcd/curator/request/RenderWidgetRequestV1';
import '@wbtcd/schemas/tcd/curator/request/RenderWidgetResponseV1';
import '@wbtcd/schemas/tcd/curator/request/SearchGalleriesRequestV1';
import '@wbtcd/schemas/tcd/curator/request/SearchGalleriesResponseV1';
import '@wbtcd/schemas/tcd/curator/request/SearchPromotionsRequestV1';
import '@wbtcd/schemas/tcd/curator/request/SearchPromotionsResponseV1';
import '@wbtcd/schemas/tcd/curator/request/SearchTeasersRequestV1';
import '@wbtcd/schemas/tcd/curator/request/SearchTeasersResponseV1';
import '@wbtcd/schemas/tcd/curator/request/SearchTimelinesRequestV1';
import '@wbtcd/schemas/tcd/curator/request/SearchTimelinesResponseV1';
import '@wbtcd/schemas/tcd/curator/request/SearchWidgetsRequestV1';
import '@wbtcd/schemas/tcd/curator/request/SearchWidgetsResponseV1';
import '@wbtcd/schemas/tcd/dam/command/CreateAssetV1';
import '@wbtcd/schemas/tcd/dam/command/DeleteAssetV1';
import '@wbtcd/schemas/tcd/dam/command/ExpireAssetV1';
import '@wbtcd/schemas/tcd/dam/command/LinkAssetsV1';
import '@wbtcd/schemas/tcd/dam/command/PatchAssetsV1';
import '@wbtcd/schemas/tcd/dam/command/ReorderGalleryAssetsV1';
import '@wbtcd/schemas/tcd/dam/command/UnlinkAssetsV1';
import '@wbtcd/schemas/tcd/dam/command/UpdateAssetV1';
import '@wbtcd/schemas/tcd/dam/event/AssetCreatedV1';
import '@wbtcd/schemas/tcd/dam/event/AssetDeletedV1';
import '@wbtcd/schemas/tcd/dam/event/AssetExpiredV1';
import '@wbtcd/schemas/tcd/dam/event/AssetLinkedV1';
import '@wbtcd/schemas/tcd/dam/event/AssetPatchedV1';
import '@wbtcd/schemas/tcd/dam/event/AssetUnlinkedV1';
import '@wbtcd/schemas/tcd/dam/event/AssetUpdatedV1';
import '@wbtcd/schemas/tcd/dam/event/GalleryAssetReorderedV1';
import '@wbtcd/schemas/tcd/dam/node/ArchiveAssetV1';
import '@wbtcd/schemas/tcd/dam/node/AudioAssetV1';
import '@wbtcd/schemas/tcd/dam/node/CodeAssetV1';
import '@wbtcd/schemas/tcd/dam/node/DocumentAssetV1';
import '@wbtcd/schemas/tcd/dam/node/ImageAssetV1';
import '@wbtcd/schemas/tcd/dam/node/UnknownAssetV1';
import '@wbtcd/schemas/tcd/dam/node/VideoAssetV1';
import '@wbtcd/schemas/tcd/dam/request/GetAssetHistoryRequestV1';
import '@wbtcd/schemas/tcd/dam/request/GetAssetHistoryResponseV1';
import '@wbtcd/schemas/tcd/dam/request/GetAssetRequestV1';
import '@wbtcd/schemas/tcd/dam/request/GetAssetResponseV1';
import '@wbtcd/schemas/tcd/dam/request/GetUploadUrlsRequestV1';
import '@wbtcd/schemas/tcd/dam/request/GetUploadUrlsResponseV1';
import '@wbtcd/schemas/tcd/dam/request/SearchAssetsRequestV1';
import '@wbtcd/schemas/tcd/dam/request/SearchAssetsResponseV1';
import '@wbtcd/schemas/tcd/iam/command/CreateAppV1';
import '@wbtcd/schemas/tcd/iam/command/CreateRoleV1';
import '@wbtcd/schemas/tcd/iam/command/CreateUserV1';
import '@wbtcd/schemas/tcd/iam/command/DeleteAppV1';
import '@wbtcd/schemas/tcd/iam/command/DeleteRoleV1';
import '@wbtcd/schemas/tcd/iam/command/DeleteUserV1';
import '@wbtcd/schemas/tcd/iam/command/GrantRolesToAppV1';
import '@wbtcd/schemas/tcd/iam/command/GrantRolesToUserV1';
import '@wbtcd/schemas/tcd/iam/command/RevokeRolesFromAppV1';
import '@wbtcd/schemas/tcd/iam/command/RevokeRolesFromUserV1';
import '@wbtcd/schemas/tcd/iam/command/UpdateAppV1';
import '@wbtcd/schemas/tcd/iam/command/UpdateRoleV1';
import '@wbtcd/schemas/tcd/iam/command/UpdateUserV1';
import '@wbtcd/schemas/tcd/iam/event/AppCreatedV1';
import '@wbtcd/schemas/tcd/iam/event/AppDeletedV1';
import '@wbtcd/schemas/tcd/iam/event/AppRolesGrantedV1';
import '@wbtcd/schemas/tcd/iam/event/AppRolesRevokedV1';
import '@wbtcd/schemas/tcd/iam/event/AppUpdatedV1';
import '@wbtcd/schemas/tcd/iam/event/RoleCreatedV1';
import '@wbtcd/schemas/tcd/iam/event/RoleDeletedV1';
import '@wbtcd/schemas/tcd/iam/event/RoleUpdatedV1';
import '@wbtcd/schemas/tcd/iam/event/UserCreatedV1';
import '@wbtcd/schemas/tcd/iam/event/UserDeletedV1';
import '@wbtcd/schemas/tcd/iam/event/UserRolesGrantedV1';
import '@wbtcd/schemas/tcd/iam/event/UserRolesRevokedV1';
import '@wbtcd/schemas/tcd/iam/event/UserUpdatedV1';
import '@wbtcd/schemas/tcd/iam/node/AlexaAppV1';
import '@wbtcd/schemas/tcd/iam/node/AndroidAppV1';
import '@wbtcd/schemas/tcd/iam/node/AppleNewsAppV1';
import '@wbtcd/schemas/tcd/iam/node/BrowserAppV1';
import '@wbtcd/schemas/tcd/iam/node/EmailAppV1';
import '@wbtcd/schemas/tcd/iam/node/IosAppV1';
import '@wbtcd/schemas/tcd/iam/node/RoleV1';
import '@wbtcd/schemas/tcd/iam/node/SlackAppV1';
import '@wbtcd/schemas/tcd/iam/node/SmsAppV1';
import '@wbtcd/schemas/tcd/iam/node/UserV1';
import '@wbtcd/schemas/tcd/iam/request/GetAllAppsRequestV1';
import '@wbtcd/schemas/tcd/iam/request/GetAllAppsResponseV1';
import '@wbtcd/schemas/tcd/iam/request/GetAppHistoryRequestV1';
import '@wbtcd/schemas/tcd/iam/request/GetAppHistoryResponseV1';
import '@wbtcd/schemas/tcd/iam/request/GetAppRequestV1';
import '@wbtcd/schemas/tcd/iam/request/GetAppResponseV1';
import '@wbtcd/schemas/tcd/iam/request/GetRoleHistoryRequestV1';
import '@wbtcd/schemas/tcd/iam/request/GetRoleHistoryResponseV1';
import '@wbtcd/schemas/tcd/iam/request/GetRoleRequestV1';
import '@wbtcd/schemas/tcd/iam/request/GetRoleResponseV1';
import '@wbtcd/schemas/tcd/iam/request/GetUserHistoryRequestV1';
import '@wbtcd/schemas/tcd/iam/request/GetUserHistoryResponseV1';
import '@wbtcd/schemas/tcd/iam/request/GetUserRequestV1';
import '@wbtcd/schemas/tcd/iam/request/GetUserResponseV1';
import '@wbtcd/schemas/tcd/iam/request/ListAllRolesRequestV1';
import '@wbtcd/schemas/tcd/iam/request/ListAllRolesResponseV1';
import '@wbtcd/schemas/tcd/iam/request/SearchUsersRequestV1';
import '@wbtcd/schemas/tcd/iam/request/SearchUsersResponseV1';
import '@wbtcd/schemas/tcd/news/command/CollectArticleStatsV1';
import '@wbtcd/schemas/tcd/news/command/CreateArticleV1';
import '@wbtcd/schemas/tcd/news/command/DeleteArticleV1';
import '@wbtcd/schemas/tcd/news/command/ExpireArticleV1';
import '@wbtcd/schemas/tcd/news/command/LockArticleV1';
import '@wbtcd/schemas/tcd/news/command/MarkArticleAsDraftV1';
import '@wbtcd/schemas/tcd/news/command/MarkArticleAsPendingV1';
import '@wbtcd/schemas/tcd/news/command/PublishArticleV1';
import '@wbtcd/schemas/tcd/news/command/RemoveArticleSlottingV1';
import '@wbtcd/schemas/tcd/news/command/RenameArticleV1';
import '@wbtcd/schemas/tcd/news/command/UnlockArticleV1';
import '@wbtcd/schemas/tcd/news/command/UnpublishArticleV1';
import '@wbtcd/schemas/tcd/news/command/UpdateArticleV1';
import '@wbtcd/schemas/tcd/news/event/AppleNewsArticleSyncedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleCreatedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleDeletedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleExpiredV1';
import '@wbtcd/schemas/tcd/news/event/ArticleLockedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/news/event/ArticleMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/news/event/ArticlePublishedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleRenamedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleScheduledV1';
import '@wbtcd/schemas/tcd/news/event/ArticleSlottingRemovedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleStatsCollectedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleUnlockedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleUnpublishedV1';
import '@wbtcd/schemas/tcd/news/event/ArticleUpdatedV1';
import '@wbtcd/schemas/tcd/news/node/ArticleV1';
import '@wbtcd/schemas/tcd/news/node/ArticleStatsV1';
import '@wbtcd/schemas/tcd/news/request/GetArticleHistoryRequestV1';
import '@wbtcd/schemas/tcd/news/request/GetArticleHistoryResponseV1';
import '@wbtcd/schemas/tcd/news/request/GetArticleRequestV1';
import '@wbtcd/schemas/tcd/news/request/GetArticleResponseV1';
import '@wbtcd/schemas/tcd/news/request/SearchArticlesRequestV1';
import '@wbtcd/schemas/tcd/news/request/SearchArticlesResponseV1';
import '@wbtcd/schemas/tcd/notify/command/CreateNotificationV1';
import '@wbtcd/schemas/tcd/notify/command/DeleteNotificationV1';
import '@wbtcd/schemas/tcd/notify/command/SendNotificationV1';
import '@wbtcd/schemas/tcd/notify/command/UpdateNotificationV1';
import '@wbtcd/schemas/tcd/notify/event/NotificationCreatedV1';
import '@wbtcd/schemas/tcd/notify/event/NotificationDeletedV1';
import '@wbtcd/schemas/tcd/notify/event/NotificationFailedV1';
import '@wbtcd/schemas/tcd/notify/event/NotificationSentV1';
import '@wbtcd/schemas/tcd/notify/event/NotificationUpdatedV1';
import '@wbtcd/schemas/tcd/notify/node/AlexaNotificationV1';
import '@wbtcd/schemas/tcd/notify/node/AndroidNotificationV1';
import '@wbtcd/schemas/tcd/notify/node/AppleNewsNotificationV1';
import '@wbtcd/schemas/tcd/notify/node/BrowserNotificationV1';
import '@wbtcd/schemas/tcd/notify/node/EmailNotificationV1';
import '@wbtcd/schemas/tcd/notify/node/IosNotificationV1';
import '@wbtcd/schemas/tcd/notify/node/SlackNotificationV1';
import '@wbtcd/schemas/tcd/notify/node/SmsNotificationV1';
import '@wbtcd/schemas/tcd/notify/request/GetNotificationHistoryRequestV1';
import '@wbtcd/schemas/tcd/notify/request/GetNotificationHistoryResponseV1';
import '@wbtcd/schemas/tcd/notify/request/GetNotificationRequestV1';
import '@wbtcd/schemas/tcd/notify/request/GetNotificationResponseV1';
import '@wbtcd/schemas/tcd/notify/request/SearchNotificationsRequestV1';
import '@wbtcd/schemas/tcd/notify/request/SearchNotificationsResponseV1';
import '@wbtcd/schemas/tcd/ovp/command/CreateVideoV1';
import '@wbtcd/schemas/tcd/ovp/command/DeleteVideoV1';
import '@wbtcd/schemas/tcd/ovp/command/ExpireVideoV1';
import '@wbtcd/schemas/tcd/ovp/command/MarkVideoAsDraftV1';
import '@wbtcd/schemas/tcd/ovp/command/MarkVideoAsPendingV1';
import '@wbtcd/schemas/tcd/ovp/command/PublishVideoV1';
import '@wbtcd/schemas/tcd/ovp/command/RenameVideoV1';
import '@wbtcd/schemas/tcd/ovp/command/UnpublishVideoV1';
import '@wbtcd/schemas/tcd/ovp/command/UpdateVideoV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoCreatedV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoDeletedV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoExpiredV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoMarkedAsDraftV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoMarkedAsPendingV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoPublishedV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoRenamedV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoScheduledV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoUnpublishedV1';
import '@wbtcd/schemas/tcd/ovp/event/VideoUpdatedV1';
import '@wbtcd/schemas/tcd/ovp/node/VideoV1';
import '@wbtcd/schemas/tcd/ovp/request/GetVideoHistoryRequestV1';
import '@wbtcd/schemas/tcd/ovp/request/GetVideoHistoryResponseV1';
import '@wbtcd/schemas/tcd/ovp/request/GetVideoRequestV1';
import '@wbtcd/schemas/tcd/ovp/request/GetVideoResponseV1';
import '@wbtcd/schemas/tcd/ovp/request/SearchVideosRequestV1';
import '@wbtcd/schemas/tcd/ovp/request/SearchVideosResponseV1';
import '@wbtcd/schemas/tcd/people/command/CreatePersonV1';
import '@wbtcd/schemas/tcd/people/command/DeletePersonV1';
import '@wbtcd/schemas/tcd/people/command/RenamePersonV1';
import '@wbtcd/schemas/tcd/people/command/UpdatePersonV1';
import '@wbtcd/schemas/tcd/people/event/PersonCreatedV1';
import '@wbtcd/schemas/tcd/people/event/PersonDeletedV1';
import '@wbtcd/schemas/tcd/people/event/PersonRenamedV1';
import '@wbtcd/schemas/tcd/people/event/PersonUpdatedV1';
import '@wbtcd/schemas/tcd/people/node/PersonV1';
import '@wbtcd/schemas/tcd/people/request/GetPersonHistoryRequestV1';
import '@wbtcd/schemas/tcd/people/request/GetPersonHistoryResponseV1';
import '@wbtcd/schemas/tcd/people/request/GetPersonRequestV1';
import '@wbtcd/schemas/tcd/people/request/GetPersonResponseV1';
import '@wbtcd/schemas/tcd/people/request/SearchPeopleRequestV1';
import '@wbtcd/schemas/tcd/people/request/SearchPeopleResponseV1';
import '@wbtcd/schemas/tcd/sys/command/CreateFlagsetV1';
import '@wbtcd/schemas/tcd/sys/command/CreatePicklistV1';
import '@wbtcd/schemas/tcd/sys/command/CreateRedirectV1';
import '@wbtcd/schemas/tcd/sys/command/DeleteFlagsetV1';
import '@wbtcd/schemas/tcd/sys/command/DeletePicklistV1';
import '@wbtcd/schemas/tcd/sys/command/DeleteRedirectV1';
import '@wbtcd/schemas/tcd/sys/command/UpdateFlagsetV1';
import '@wbtcd/schemas/tcd/sys/command/UpdatePicklistV1';
import '@wbtcd/schemas/tcd/sys/command/UpdateRedirectV1';
import '@wbtcd/schemas/tcd/sys/event/FlagsetCreatedV1';
import '@wbtcd/schemas/tcd/sys/event/FlagsetDeletedV1';
import '@wbtcd/schemas/tcd/sys/event/FlagsetUpdatedV1';
import '@wbtcd/schemas/tcd/sys/event/PicklistCreatedV1';
import '@wbtcd/schemas/tcd/sys/event/PicklistDeletedV1';
import '@wbtcd/schemas/tcd/sys/event/PicklistUpdatedV1';
import '@wbtcd/schemas/tcd/sys/event/RedirectCreatedV1';
import '@wbtcd/schemas/tcd/sys/event/RedirectDeletedV1';
import '@wbtcd/schemas/tcd/sys/event/RedirectUpdatedV1';
import '@wbtcd/schemas/tcd/sys/node/FlagsetV1';
import '@wbtcd/schemas/tcd/sys/node/PicklistV1';
import '@wbtcd/schemas/tcd/sys/node/RedirectV1';
import '@wbtcd/schemas/tcd/sys/request/GetFlagsetHistoryRequestV1';
import '@wbtcd/schemas/tcd/sys/request/GetFlagsetHistoryResponseV1';
import '@wbtcd/schemas/tcd/sys/request/GetFlagsetRequestV1';
import '@wbtcd/schemas/tcd/sys/request/GetFlagsetResponseV1';
import '@wbtcd/schemas/tcd/sys/request/GetPicklistHistoryRequestV1';
import '@wbtcd/schemas/tcd/sys/request/GetPicklistHistoryResponseV1';
import '@wbtcd/schemas/tcd/sys/request/GetPicklistRequestV1';
import '@wbtcd/schemas/tcd/sys/request/GetPicklistResponseV1';
import '@wbtcd/schemas/tcd/sys/request/GetRedirectHistoryRequestV1';
import '@wbtcd/schemas/tcd/sys/request/GetRedirectHistoryResponseV1';
import '@wbtcd/schemas/tcd/sys/request/GetRedirectRequestV1';
import '@wbtcd/schemas/tcd/sys/request/GetRedirectResponseV1';
import '@wbtcd/schemas/tcd/sys/request/ListAllFlagsetsRequestV1';
import '@wbtcd/schemas/tcd/sys/request/ListAllFlagsetsResponseV1';
import '@wbtcd/schemas/tcd/sys/request/ListAllPicklistsRequestV1';
import '@wbtcd/schemas/tcd/sys/request/ListAllPicklistsResponseV1';
import '@wbtcd/schemas/tcd/sys/request/SearchRedirectsRequestV1';
import '@wbtcd/schemas/tcd/sys/request/SearchRedirectsResponseV1';
import '@wbtcd/schemas/tcd/taxonomy/command/CreateCategoryV1';
import '@wbtcd/schemas/tcd/taxonomy/command/CreateChannelV1';
import '@wbtcd/schemas/tcd/taxonomy/command/DeleteCategoryV1';
import '@wbtcd/schemas/tcd/taxonomy/command/DeleteChannelV1';
import '@wbtcd/schemas/tcd/taxonomy/command/RenameCategoryV1';
import '@wbtcd/schemas/tcd/taxonomy/command/RenameChannelV1';
import '@wbtcd/schemas/tcd/taxonomy/command/UpdateCategoryV1';
import '@wbtcd/schemas/tcd/taxonomy/command/UpdateChannelV1';
import '@wbtcd/schemas/tcd/taxonomy/event/CategoryCreatedV1';
import '@wbtcd/schemas/tcd/taxonomy/event/CategoryDeletedV1';
import '@wbtcd/schemas/tcd/taxonomy/event/CategoryRenamedV1';
import '@wbtcd/schemas/tcd/taxonomy/event/CategoryUpdatedV1';
import '@wbtcd/schemas/tcd/taxonomy/event/ChannelCreatedV1';
import '@wbtcd/schemas/tcd/taxonomy/event/ChannelDeletedV1';
import '@wbtcd/schemas/tcd/taxonomy/event/ChannelRenamedV1';
import '@wbtcd/schemas/tcd/taxonomy/event/ChannelUpdatedV1';
import '@wbtcd/schemas/tcd/taxonomy/node/CategoryV1';
import '@wbtcd/schemas/tcd/taxonomy/node/ChannelV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetAllChannelsRequestV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetAllChannelsResponseV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetCategoryHistoryRequestV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetCategoryHistoryResponseV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetCategoryRequestV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetCategoryResponseV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetChannelHistoryRequestV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetChannelHistoryResponseV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetChannelRequestV1';
import '@wbtcd/schemas/tcd/taxonomy/request/GetChannelResponseV1';
import '@wbtcd/schemas/tcd/taxonomy/request/SearchCategoriesRequestV1';
import '@wbtcd/schemas/tcd/taxonomy/request/SearchCategoriesResponseV1';
import '@wbtcd/schemas/tcd/taxonomy/request/SuggestHashtagsRequestV1';
import '@wbtcd/schemas/tcd/taxonomy/request/SuggestHashtagsResponseV1';
import '@triniti/schemas/triniti/common/RenderContextV1';
import '@triniti/schemas/triniti/curator/SlotV1';
import '@triniti/schemas/triniti/migrator/command/SyncCfNodesV1';
import '@triniti/schemas/triniti/news/command/SyncFacebookInstantArticleV1';
import '@triniti/schemas/triniti/news/event/FacebookInstantArticleSyncedV1';
import '@triniti/schemas/triniti/notify/NotifierResultV1';
import '@triniti/schemas/triniti/ovp.jwplayer/command/SyncMediaV1';
import '@triniti/schemas/triniti/ovp.jwplayer/event/MediaSyncedV1';
import '@triniti/schemas/triniti/ovp.kaltura/CaptionV1';
import '@triniti/schemas/triniti/ovp.kaltura/EntryV1';
import '@triniti/schemas/triniti/ovp.kaltura/FlavorV1';
import '@triniti/schemas/triniti/ovp.kaltura/command/SyncEntryV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StartChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StopChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStartedV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStoppedV1';
import '@triniti/schemas/triniti/ovp/command/UpdateTranscodingStatusV1';
import '@triniti/schemas/triniti/ovp/command/UpdateTranscriptionStatusV1';
import '@triniti/schemas/triniti/ovp/event/TranscodingCompletedV1';
import '@triniti/schemas/triniti/ovp/event/TranscodingFailedV1';
import '@triniti/schemas/triniti/ovp/event/TranscodingStartedV1';
import '@triniti/schemas/triniti/ovp/event/TranscriptionCompletedV1';
import '@triniti/schemas/triniti/ovp/event/TranscriptionFailedV1';
import '@triniti/schemas/triniti/ovp/event/TranscriptionStartedV1';
import '@triniti/schemas/triniti/sys/command/PurgeCacheV1';

export default MessageResolver;
