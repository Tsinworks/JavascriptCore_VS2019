// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/IntlNumberFormatPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex numberFormatPrototypeTableIndex[9] = {
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 2, -1 },
    { -1, -1 },
    { 0, 8 },
    { -1, -1 },
    { -1, -1 },
    { 1, -1 },
};

static const struct HashTableValue numberFormatPrototypeTableValues[3] = {
   { "format", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::ReadOnly|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(intlNumberFormatPrototypeGetterFormat), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
   { "formatToParts", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlNumberFormatPrototypeFuncFormatToParts), (intptr_t)(1) } },
   { "resolvedOptions", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlNumberFormatPrototypeFuncResolvedOptions), (intptr_t)(0) } },
};

static const struct HashTable numberFormatPrototypeTable =
    { 3, 7, true, nullptr, numberFormatPrototypeTableValues, numberFormatPrototypeTableIndex };

} // namespace JSC
