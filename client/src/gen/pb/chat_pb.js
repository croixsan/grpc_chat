// source: chat.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.chat.CreateChatRoomRequest', null, global);
goog.exportSymbol('proto.chat.CreateChatRoomResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.CreateChatRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.CreateChatRoomRequest.repeatedFields_, null);
};
goog.inherits(proto.chat.CreateChatRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.CreateChatRoomRequest.displayName = 'proto.chat.CreateChatRoomRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.CreateChatRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.CreateChatRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.CreateChatRoomResponse.displayName = 'proto.chat.CreateChatRoomResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.CreateChatRoomRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.CreateChatRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.CreateChatRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.CreateChatRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CreateChatRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    useridsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.CreateChatRoomRequest}
 */
proto.chat.CreateChatRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.CreateChatRoomRequest;
  return proto.chat.CreateChatRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.CreateChatRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.CreateChatRoomRequest}
 */
proto.chat.CreateChatRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setUseridsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.CreateChatRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.CreateChatRoomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.CreateChatRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CreateChatRoomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseridsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 userIds = 1;
 * @return {!Array<number>}
 */
proto.chat.CreateChatRoomRequest.prototype.getUseridsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.chat.CreateChatRoomRequest} returns this
 */
proto.chat.CreateChatRoomRequest.prototype.setUseridsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.chat.CreateChatRoomRequest} returns this
 */
proto.chat.CreateChatRoomRequest.prototype.addUserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.CreateChatRoomRequest} returns this
 */
proto.chat.CreateChatRoomRequest.prototype.clearUseridsList = function() {
  return this.setUseridsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.CreateChatRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.CreateChatRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.CreateChatRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CreateChatRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatroomid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roomicon: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastmessagetext: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastmessagetimestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    unreadcount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.CreateChatRoomResponse}
 */
proto.chat.CreateChatRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.CreateChatRoomResponse;
  return proto.chat.CreateChatRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.CreateChatRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.CreateChatRoomResponse}
 */
proto.chat.CreateChatRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChatroomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomicon(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastmessagetext(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastmessagetimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.CreateChatRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.CreateChatRoomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.CreateChatRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CreateChatRoomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatroomid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRoomname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoomicon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastmessagetext();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastmessagetimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUnreadcount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 chatRoomId = 1;
 * @return {number}
 */
proto.chat.CreateChatRoomResponse.prototype.getChatroomid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.CreateChatRoomResponse} returns this
 */
proto.chat.CreateChatRoomResponse.prototype.setChatroomid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string roomName = 2;
 * @return {string}
 */
proto.chat.CreateChatRoomResponse.prototype.getRoomname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CreateChatRoomResponse} returns this
 */
proto.chat.CreateChatRoomResponse.prototype.setRoomname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string roomIcon = 3;
 * @return {string}
 */
proto.chat.CreateChatRoomResponse.prototype.getRoomicon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CreateChatRoomResponse} returns this
 */
proto.chat.CreateChatRoomResponse.prototype.setRoomicon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string lastMessageText = 4;
 * @return {string}
 */
proto.chat.CreateChatRoomResponse.prototype.getLastmessagetext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CreateChatRoomResponse} returns this
 */
proto.chat.CreateChatRoomResponse.prototype.setLastmessagetext = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 lastMessageTimestamp = 5;
 * @return {number}
 */
proto.chat.CreateChatRoomResponse.prototype.getLastmessagetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.CreateChatRoomResponse} returns this
 */
proto.chat.CreateChatRoomResponse.prototype.setLastmessagetimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 unreadCount = 6;
 * @return {number}
 */
proto.chat.CreateChatRoomResponse.prototype.getUnreadcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.CreateChatRoomResponse} returns this
 */
proto.chat.CreateChatRoomResponse.prototype.setUnreadcount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.chat);
