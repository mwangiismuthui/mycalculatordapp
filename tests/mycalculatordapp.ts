import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Mycalculatordapp } from "../target/types/mycalculatordapp";

describe("mycalculatordapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Mycalculatordapp as Program<Mycalculatordapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
