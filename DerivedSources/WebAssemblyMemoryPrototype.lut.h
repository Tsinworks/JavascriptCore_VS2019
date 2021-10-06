// Automatically generated from C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/wasm/js/WebAssemblyMemoryPrototype.cpp using C:/Users/lumia/Desktop/WebKit/Source/JavaScriptCore/create_hash_table. DO NOT EDIT!

#include "Lookup.h"

namespace JSC {

static const struct CompactHashIndex prototypeTableWebAssemblyMemoryIndex[10] = {
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 0, 8 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { -1, -1 },
    { 1, 9 },
    { 2, -1 },
};

static const struct HashTableValue prototypeTableWebAssemblyMemoryValues[3] = {
   { "grow", static_cast<unsigned>(PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(webAssemblyMemoryProtoFuncGrow), (intptr_t)(1) } },
   { "buffer", static_cast<unsigned>(PropertyAttribute::ReadOnly|PropertyAttribute::CustomAccessor), NoIntrinsic, { (intptr_t)static_cast<PropertySlot::GetValueFunc>(webAssemblyMemoryProtoGetterBuffer), (intptr_t)static_cast<PutPropertySlot::PutValueFunc>(0) } },
   { "type", static_cast<unsigned>(PropertyAttribute::Function), NoIntrinsic, { (intptr_t)static_cast<RawNativeFunction>(webAssemblyMemoryProtoFuncType), (intptr_t)(0) } },
};

static const struct HashTable prototypeTableWebAssemblyMemory =
    { 3, 7, true, nullptr, prototypeTableWebAssemblyMemoryValues, prototypeTableWebAssemblyMemoryIndex };

} // namespace JSC
