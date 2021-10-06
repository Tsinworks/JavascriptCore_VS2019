// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/TemporalCalendarPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex temporalCalendarPrototypeTableIndex[16] = {
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 1, -1 },
    { -1, -1 },
    { 0, -1 },
    { -1, -1 },
    { 3, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 2, -1 },
    { 4, -1 },
    { -1, -1 },
    { -1, -1 },
};

static const struct HashTableValue temporalCalendarPrototypeTableValues[5] = {
   { "fields", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalCalendarPrototypeFuncFields), (intptr_t)(1) } },
   { "mergeFields", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalCalendarPrototypeFuncMergeFields), (intptr_t)(2) } },
   { "toString", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalCalendarPrototypeFuncToString), (intptr_t)(0) } },
   { "toJSON", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalCalendarPrototypeFuncToJSON), (intptr_t)(0) } },
   { "id", static_cast<unsigned>(PropertyAttribute::ReadOnly|PropertyAttribute::DontEnum|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(temporalCalendarPrototypeGetterId), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
};

static const struct HashTable temporalCalendarPrototypeTable =
    { 5, 15, true, nullptr, temporalCalendarPrototypeTableValues, temporalCalendarPrototypeTableIndex };

} // namespace JSC
