<template>
  <div>
    <h3>Mis paneles</h3>
    <input
        type="text"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
    <div class="boards-collection">
      <span v-if="fetchingData">Cargando...</span>
      <board-card v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"></board-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoardCard from '@/components/BoardCard'
export default{
  name: 'home-view',
  components: { BoardCard },
  data () {
    return {
      boardName: ''
    }
  },
  computed: {
    ...mapState([
      'boards',
      'fetchingData'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
    }
  },
  created () {
    this.fetchBoards({ user: 1 })
  }
}
</script>

<style lang="scss" scoped>
  h3{
    text-align: left;
    margin: 1.5rem;
  }
  .boards-collection{
    display: flex;
    flex-direcion: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }
  input{
    box-sizing: border-box;
    background-color: #546e7A;
    border: 2px solid #546e7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546e7A;
    }

    &::placeholder {
      color: white;
    }
  }
</style>
