import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const DATA = [
  {
    id: 'c1',
    firstName: 'Falk',
    lastName: 'Dev',
    areas: ['frontend', 'backend', 'career'],
    description:
      "I'm Falk and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
    hourlyRate: 30
  },
  {
    id: 'c2',
    firstName: 'Julie',
    lastName: 'Jones',
    areas: ['frontend', 'career'],
    description:
      'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
    hourlyRate: 30
  }
]

export default {
  namespaced: true,
  state() {
    return {
      coaches: DATA
    }
  },
  mutations,
  actions,
  getters
}
