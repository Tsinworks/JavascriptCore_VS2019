// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/IntlPluralRulesPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex pluralRulesPrototypeTableIndex[5] = {
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 0, 4 },
    { 1, -1 },
};

static const struct HashTableValue pluralRulesPrototypeTableValues[2] = {
   { "select", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlPluralRulesPrototypeFuncSelect), (intptr_t)(1) } },
   { "resolvedOptions", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlPluralRulesPrototypeFuncResolvedOptions), (intptr_t)(0) } },
};

static const struct HashTable pluralRulesPrototypeTable =
    { 2, 3, false, nullptr, pluralRulesPrototypeTableValues, pluralRulesPrototypeTableIndex };

} // namespace JSC
