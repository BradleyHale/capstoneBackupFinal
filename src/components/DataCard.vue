<!--DataCard.vue-->
<template>
  <div class="card">
    <img :src="image" :alt="title">
    <div class="planHeader" tabindex="-1">
      <h2 tabindex="-1">Plan #{{ planID }}</h2>
    </div>
    <div class="planDetails" tabindex="-1">
      <div class="plan-stat">
        <span class="plan-stat-label">Total SqFt:</span>
        <span class="plan-stat-value">{{ overallSQFT }} sq. ft.</span>
      </div>
      <div class="plan-stat">
        <span class="plan-stat-label">Dimensions:</span>
        <span class="plan-stat-value">{{ dimensions }}</span>
      </div>
      <div class="plan-stat">
        <span class="plan-stat-label">Stories:</span>
        <span class="plan-stat-value">{{ floors }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false
    },
    planID: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    overallSQFT: {
      type: Number,
      required: true
    },
    lengthFt: {
      type: Number,
      required: true
    },
    lengthIn: {
      type: Number,
      required: true
    },
    widthFt: {
      type: Number,
      required: true
    },
    widthIn: {
      type: Number,
      required: true
    },
    heightFt: {
      type: Number,
      required: true
    },
    heightIn: {
      type: Number,
      required: true
    },
    floors: {
      type: Number,
      required: true
    }
  },
  computed: {
dimensions() {
      const length = `${this.lengthFt}'${this.lengthIn}"`;
      const width = `${this.widthFt}'${this.widthIn}"`;
      const height = `${this.heightFt}'${this.heightIn}"`;
      return `${length} x ${width} x ${height}`;
    }
  }
};
</script>

  <style scoped>
  .card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .card .details {
    text-align: left;
  }
  
  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .card p {
    margin-bottom: 5px;
  }

    .card .houseDetails  { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 5px;
}

.plan-stat-label {
    white-space: nowrap;
    font-family: var(--opensans);
    font-size: 11px;
    font-weight: 500;
    color: #1a447a;
    text-transform: uppercase;
    display: block;
}

.plan-stat-value {
    color: #000;
    font-weight: 500;
    font-size: 16px;
    display: block;
    margin-top: 5px;
}


  </style>