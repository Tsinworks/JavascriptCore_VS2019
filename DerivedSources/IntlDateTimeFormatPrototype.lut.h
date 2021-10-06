// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/IntlDateTimeFormatPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex dateTimeFormatPrototypeTableIndex[9] = {
    { -1, -1 },
    { 1, -1 },
    { -1, -1 },
    { 3, -1 },
    { -1, -1 },
    { 0, 8 },
    { -1, -1 },
    { -1, -1 },
    { 2, -1 },
};

static const struct HashTableValue dateTimeFormatPrototypeTableValues[4] = {
   { "format", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::ReadOnly|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(intlDateTimeFormatPrototypeGetterFormat), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
   { "formatRange", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlDateTimeFormatPrototypeFuncFormatRange), (intptr_t)(2) } },
   { "formatToParts", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlDateTimeFormatPrototypeFuncFormatToParts), (intptr_t)(1) } },
   { "resolvedOptions", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlDateTimeFormatPrototypeFuncResolvedOptions), (intptr_t)(0) } },
};

static const struct HashTable dateTimeFormatPrototypeTable =
    { 4, 7, true, nullptr, dateTimeFormatPrototypeTableValues, dateTimeFormatPrototypeTableIndex };

} // namespace JSC
