# **Formal Security Analysis of ZKON’s zkTLS Mina Oracle**

This document presents a comprehensive and rigorous formal security analysis of ZKON’s zkTLS Mina Oracle, including formal adversary models, security assumptions, cryptographic definitions, detailed definitions of attacks, game-based security definitions, and rigorous proofs by contradiction. All elements are connected to adversary models and underlying cryptographic assumptions to ensure completeness and coherence.

## **1. Formal Adversary Model**

We consider adversaries $\mathcal{A}$ with the following capabilities:

- **$\mathcal{A}_{\mathsf{passive}}$**: Observes all network communications but cannot modify them.
- **$\mathcal{A}_{\mathsf{active}}$**: Can modify, replay, or inject messages into network communications.
- **$\mathcal{A}_{O}$**: Corrupts the Oracle $O$, gaining access to its internal state, computation, and partial MPC data.
- **$\mathcal{A}_{B}$**: Corrupts the blockchain $B$, attempting to tamper with on-chain proofs and state.

## **2. Security Assumptions**

We assume:

- **A1. IND-CCA security of TLS:** TLS session keys are indistinguishable from random values.
- **A2. Collision resistance of $H$:** No adversary can find collisions in $H$.
- **A3. Soundness of zkProofs:** No adversary can forge a proof without the correct witness.
- **A4. MPC privacy and correctness:** No partial collusion reveals the input.

## **3. Formal Cryptographic Definitions**

We define:

- **D1. Confidentiality:** Ensures that no adversary $\mathcal{A}_{\mathsf{passive}}$ learns the session key $k_{session}$ or message $m$.
- **D2. Integrity:** Guarantees that $\mathcal{A}_{\mathsf{active}}$ cannot modify $m$ or the commitment $CM$ without detection.
- **D3. Authenticity:** Ensures that no adversary $\mathcal{A}_{\mathsf{active}}$ or $\mathcal{A}_{O}$ can impersonate honest parties or forge valid proofs $\pi$.
- **D4. Availability:** Ensures that $\mathcal{A}_{\mathsf{active}}$ or $\mathcal{A}_{O}$ cannot prevent $\Pi_{zkTLS}$ from completing successfully.

## **4. Attack Definitions and Connections to Adversary Model**

### **4.1 Fake Key Reveal Attack**  
- **Description:** $\mathcal{A}_{\mathsf{active}}$ or $\mathcal{A}_{O}$ tries to provide a fake session key $k'$ or tamper with the established TLS key.
- **Security Property:** Confidentiality and authenticity prevent such forgeries without breaking TLS security or zkProof soundness.

### **4.2 Data Injection Attack**  
- **Description:** $\mathcal{A}_{\mathsf{active}}$ injects false data $m'$ into the TLS session.
- **Security Property:** Integrity ensures any alteration results in a commitment collision, violating $H$.

### **4.3 Collusion Attack Among Oracle Nodes**  
- **Description:** $\mathcal{A}_{O}$ corrupts Oracle nodes to reconstruct user secrets from MPC shares.
- **Security Property:** MPC privacy ensures no partial collusion reveals $m$.

## **5. Game-Based Security Definitions**

We define the following games:

- **G1. Confidentiality Game ($\mathcal{A}_{\mathsf{passive}}$)**: Tests if $\mathcal{A}_{\mathsf{passive}}$ can distinguish $m$ from random ciphertexts.
- **G2. Integrity Game ($\mathcal{A}_{\mathsf{active}}$)**: Tests if $\mathcal{A}_{\mathsf{active}}$ can modify $m$ without detection.
- **G3. Authenticity Game ($\mathcal{A}_{\mathsf{active}}, \mathcal{A}_{O}$)**: Tests if $\mathcal{A}$ can forge $m$ or $\pi$.
- **G4. Availability Game ($\mathcal{A}_{\mathsf{active}}, \mathcal{A}_{O}$)**: Tests if $\mathcal{A}$ can halt $\Pi_{zkTLS}$.

## **6. Proofs of Security**

### **6.1 Proof of Confidentiality**
#### **Theorem:**
No PPT adversary $( \mathcal{A}_{\mathsf{passive}} )$ can break the confidentiality of $( \Pi_{zkTLS} )$ without violating the IND-CCA security of TLS or the privacy guarantees of MPC.

#### **Proof (by contradiction):**  
$$
\text{Assume there exists a PPT adversary } \mathcal{A}_{\mathsf{passive}} \text{ that breaks the confidentiality of } \Pi_{zkTLS} \text{ with non-negligible probability.}
$$
- **Game $( G_0 )$:** The challenger initializes the TLS handshake, producing a session key $( k_{session} )$.
- **Game $( G_1 )$:** $( \mathcal{A}_{\mathsf{passive}} )$ is given ciphertexts $( Enc_{k_{session}}(m_0) )$ and $( Enc_{k_{session}}(m_1) )$. The adversary guesses $( b )$ where $( m_b )$ is the plaintext.

If $( \mathcal{A}_{\mathsf{passive}} )$ distinguishes with non-negligible probability, it implies a break in the IND-CCA security of the TLS encryption scheme.

Thus, confidentiality holds.

### **6.2 Proof of Integrity**
#### **Theorem:**
No PPT adversary $( \mathcal{A}_{\mathsf{active}} )$ can modify messages or commitments in $( \Pi_{zkTLS} )$ without breaking the collision resistance of $( H )$ or the soundness of zkProofs.

#### **Proof (by contradiction):**  
$$
\text{Assume } \mathcal{A}_{\mathsf{active}} \text{ modifies } m \text{ to } m' \text{ without detection.}
$$
- **Game $( G_0 )$:** Challenger commits to $( m )$ with $( CM = H(m) )$.
- **Game $( G_1 )$:** $( \mathcal{A}_{\mathsf{active}} )$ produces $( m' )$ and $( CM' )$ such that $( CM = CM' )$.

If $( CM = CM' )$ but $( m \neq m' )$, this breaks collision resistance of $( H )$.

Thus, integrity holds.
