// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/wasm/js/WebAssemblyTablePrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex prototypeTableWebAssemblyTableIndex[16] = {
    { -1, -1 },
    { 0, -1 },
    { -1, -1 },
    { 1, -1 },
    { -1, -1 },
    { 2, -1 },
    { -1, -1 },
    { 3, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 4, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
};

static const struct HashTableValue prototypeTableWebAssemblyTableValues[5] = {
   { "length", static_cast<unsigned>(PropertyAttribute::ReadOnly|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(webAssemblyTableProtoGetterLength), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
   { "grow", static_cast<unsigned>(PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(webAssemblyTableProtoFuncGrow), (intptr_t)(1) } },
   { "get", static_cast<unsigned>(PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(webAssemblyTableProtoFuncGet), (intptr_t)(1) } },
   { "set", static_cast<unsigned>(PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(webAssemblyTableProtoFuncSet), (intptr_t)(2) } },
   { "type", static_cast<unsigned>(PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(webAssemblyTableProtoFuncType), (intptr_t)(0) } },
};

static const struct HashTable prototypeTableWebAssemblyTable =
    { 5, 15, true, nullptr, prototypeTableWebAssemblyTableValues, prototypeTableWebAssemblyTableIndex };

} // namespace JSC
