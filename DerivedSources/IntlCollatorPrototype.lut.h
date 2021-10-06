// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/IntlCollatorPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex collatorPrototypeTableIndex[4] = {
    { 0, -1 },
    { -1, -1 },
    { -1, -1 },
    { 1, -1 },
};

static const struct HashTableValue collatorPrototypeTableValues[2] = {
   { "compare", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::ReadOnly|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(intlCollatorPrototypeGetterCompare), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
   { "resolvedOptions", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(intlCollatorPrototypeFuncResolvedOptions), (intptr_t)(0) } },
};

static const struct HashTable collatorPrototypeTable =
    { 2, 3, true, nullptr, collatorPrototypeTableValues, collatorPrototypeTableIndex };

} // namespace JSC
