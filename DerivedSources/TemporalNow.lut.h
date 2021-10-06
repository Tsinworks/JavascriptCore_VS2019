// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/TemporalNow.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex temporalNowTableIndex[2] = {
    { -1, -1 },
    { 0, -1 },
};

static const struct HashTableValue temporalNowTableValues[1] = {
   { "timeZone", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalNowFuncTimeZone), (intptr_t)(0) } },
};

static const struct HashTable temporalNowTable =
    { 1, 1, false, nullptr, temporalNowTableValues, temporalNowTableIndex };

} // namespace JSC
