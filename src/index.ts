class PublicKey {
  bytes: Uint8Array;
  rawBytes: Uint8Array;

  constructor(bytes: Uint8Array) {
    this.bytes = bytes;
    this.rawBytes = bytes;
  }

  hexString() {
    return Array.from(this.bytes)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  toString = this.hexString;
}

class Signature {
  bytes: Uint8Array;
  rawBytes: Uint8Array;

  constructor(bytes: Uint8Array) {
    this.bytes = bytes;
    this.rawBytes = bytes;
  }

  hexString() {
    return Array.from(this.bytes)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  toString = this.hexString;
}

class SigningKey {
  keyId: number;

  constructor(keyId: number) {
    this.keyId = keyId;
  }

  publicKey(): PublicKey {
    return new PublicKey(new Uint8Array());
  }

  sign(data: string | Uint8Array): Signature {
    return new Signature(new Uint8Array());
  }
}

export function generateEd25519Key() {
  return new SigningKey(0);
}
