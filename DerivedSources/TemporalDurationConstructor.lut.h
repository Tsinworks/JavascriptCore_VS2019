// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/TemporalDurationConstructor.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex temporalDurationConstructorTableIndex[4] = {
    { 1, -1 },
    { -1, -1 },
    { 0, -1 },
    { -1, -1 },
};

static const struct HashTableValue temporalDurationConstructorTableValues[2] = {
   { "from", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalDurationConstructorFuncFrom), (intptr_t)(1) } },
   { "compare", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(temporalDurationConstructorFuncCompare), (intptr_t)(2) } },
};

static const struct HashTable temporalDurationConstructorTable =
    { 2, 3, false, nullptr, temporalDurationConstructorTableValues, temporalDurationConstructorTableIndex };

} // namespace JSC
