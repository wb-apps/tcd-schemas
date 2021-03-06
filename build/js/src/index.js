/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.truecrimedaily.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import messages from './manifests/messages';

MessageResolver.register(messages);
MessageResolver.setDefaultVendor('tcd');
MessageResolver.setManifestResolver(file => import(`./manifests/${file}`))

export default MessageResolver;
