// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/TemporalTimeZonePrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex temporalTimeZonePrototypeTableIndex[8] = {
    { 1, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 0, -1 },
    { 2, -1 },
    { -1, -1 },
    { -1, -1 },
};

static const struct HashTableValue temporalTimeZonePrototypeTableValues[3] = {
   { "toString", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalTimeZonePrototypeFuncToString), (intptr_t)(0) } },
   { "toJSON", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalTimeZonePrototypeFuncToJSON), (intptr_t)(0) } },
   { "id", static_cast<unsigned>(PropertyAttribute::ReadOnly|PropertyAttribute::DontEnum|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(temporalTimeZonePrototypeGetterId), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
};

static const struct HashTable temporalTimeZonePrototypeTable =
    { 3, 7, true, nullptr, temporalTimeZonePrototypeTableValues, temporalTimeZonePrototypeTableIndex };

} // namespace JSC
