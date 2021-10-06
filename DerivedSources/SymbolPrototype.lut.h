// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/runtime/SymbolPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex symbolPrototypeTableIndex[8] = {
    { -1, -1 },
    { -1, -1 },
    { 2, -1 },
    { -1, -1 },
    { 1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 0, -1 },
};

static const struct HashTableValue symbolPrototypeTableValues[3] = {
   { "description", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::ReadOnly|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(symbolProtoGetterDescription), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
   { "toString", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(symbolProtoFuncToString), (intptr_t)(0) } },
   { "valueOf", static_cast<unsigned>(PropertyAttribute::DontEnum|PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(symbolProtoFuncValueOf), (intptr_t)(0) } },
};

static const struct HashTable symbolPrototypeTable =
    { 3, 7, true, nullptr, symbolPrototypeTableValues, symbolPrototypeTableIndex };

} // namespace JSC
