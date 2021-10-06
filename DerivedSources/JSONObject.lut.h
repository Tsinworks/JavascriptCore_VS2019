// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/JSONObject.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex jsonTableIndex[4] = {
    { -1, -1 },
    { 0, -1 },
    { -1, -1 },
    { 1, -1 },
};

static const struct HashTableValue jsonTableValues[2] = {
   { "parse", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(jsonProtoFuncParse), (intptr_t)(2) } },
   { "stringify", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(jsonProtoFuncStringify), (intptr_t)(3) } },
};

static const struct HashTable jsonTable =
    { 2, 3, false, nullptr, jsonTableValues, jsonTableIndex };

} // namespace JSC
