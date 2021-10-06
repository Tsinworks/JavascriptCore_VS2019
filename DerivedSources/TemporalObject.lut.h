// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/TemporalObject.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex temporalObjectTableIndex[16] = {
    { -1, -1 },
    { -1, -1 },
    { 1, -1 },
    { 0, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 4, -1 },
    { -1, -1 },
    { -1, -1 },
    { 2, -1 },
    { 3, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
};

static const struct HashTableValue temporalObjectTableValues[5] = {
   { "Calendar", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::PropertyCallback), NoIntrinsic, { (intptr_t)static_cast<LazyPropertyCallback>(createCalendarConstructor), (intptr_t)(0) } },
   { "Duration", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::PropertyCallback), NoIntrinsic, { (intptr_t)static_cast<LazyPropertyCallback>(createDurationConstructor), (intptr_t)(0) } },
   { "Now", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::PropertyCallback), NoIntrinsic, { (intptr_t)static_cast<LazyPropertyCallback>(createNowObject), (intptr_t)(0) } },
   { "PlainTime", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::PropertyCallback), NoIntrinsic, { (intptr_t)static_cast<LazyPropertyCallback>(createPlainTimeConstructor), (intptr_t)(0) } },
   { "TimeZone", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::PropertyCallback), NoIntrinsic, { (intptr_t)static_cast<LazyPropertyCallback>(createTimeZoneConstructor), (intptr_t)(0) } },
};

static const struct HashTable temporalObjectTable =
    { 5, 15, false, nullptr, temporalObjectTableValues, temporalObjectTableIndex };

} // namespace JSC
