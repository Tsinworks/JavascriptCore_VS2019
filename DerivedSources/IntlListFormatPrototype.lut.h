// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/IntlListFormatPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex listFormatPrototypeTableIndex[9] = {
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

static const struct HashTableValue listFormatPrototypeTableValues[3] = {
   { "format", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlListFormatPrototypeFuncFormat), (intptr_t)(1) } },
   { "formatToParts", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlListFormatPrototypeFuncFormatToParts), (intptr_t)(1) } },
   { "resolvedOptions", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlListFormatPrototypeFuncResolvedOptions), (intptr_t)(0) } },
};

static const struct HashTable listFormatPrototypeTable =
    { 3, 7, false, nullptr, listFormatPrototypeTableValues, listFormatPrototypeTableIndex };

} // namespace JSC
